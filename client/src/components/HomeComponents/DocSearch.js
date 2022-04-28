import { Search } from "@material-ui/icons";
import React, { useEffect, useState } from "react";

import firebase from 'firebase';

function DocSearch() {

  const [value, setValue] = useState([]);


  const fetchState = (search) => {
    firebase.firestore()
    .collection('mydocuments')
    .where('docname','>=', search)
    .get()
    .then((snapshot) => {
      let mydocuments = snapshot.docs.map(doc => {
        const data = doc.data();
        const id = doc.id;
        return {id, ...data }
      });

      setValue(mydocuments)
    },[]);

  }

  return (
    <div className="documents__bottom">
      <div className="docsearch__top">
        <div className="docsearch__div">
          <h1 className="docsearch__text">Search By Name</h1>
        </div>
        <div classname="">
            <div className="docsearch__div1">
                <Search/>
                <input placeholder="Document Search"
                className="doc__searchbar"
                onChange={(search)=> fetchState(search)}
                value={value}/>
            </div>
        </div>
      </div>


      <div className="docsearch__bottom">
        <div className="docsearch__div">
            <h1 className="docsearch__text">Search Results</h1>
        </div>
        <div>
        {value.map((mydocuments) => (
          <h1 key={document.id}>{document.name}</h1>

        ))}

         
        
        </div>
      </div>
    </div>
  );
}

export default DocSearch;
