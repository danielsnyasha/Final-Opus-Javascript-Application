import React, {useState, useEffect} from "react";
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Todo from './Todo/Todo';
import { db, storage } from "./firebase";
import firebase from 'firebase';

import "../components/Todo/MainTodo.css";

function App() {
  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      console.log(snapshot.docs.map(doc=> doc.data()));
      setTodos(snapshot.docs.map(doc => ({id: doc.id ,todo: doc.data().todo})));
      setInput('');

    })

  },[]);

  const addTodo = (event)=>{
    event.preventDefault();

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setTodos([...todos, input]);
  }
  return (
    <div className="main__todo">

      <div className="todo__header">
      <h1>My Todo List</h1>
      </div>

      <form className="todo__form">

      <FormControl>
        <InputLabel>Write a Todo</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)}/>
      </FormControl>

      <Button disabled={!input} onClick={addTodo} color="primary" variant="contained" type="submit">Add Todo</Button>
      </form>

      <ul>
        {todos.map(todo=>(
          <Todo todo={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
