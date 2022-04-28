import React, {useEffect} from 'react';
import './HomeComponents/Main.css';
import Sidebar from './HomeComponents/Sidebar';
import Feed from './Home';
import Widgets from './HomeComponents/Widgets';

function Main(){
    return (
        <div className="main__">
            <div className="main__body">
                <Sidebar/>
                <Feed/>
                <Widgets/>
            </div>

        </div>
    )
    
}
export default Main;