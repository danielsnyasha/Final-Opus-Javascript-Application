import React from "react";
import './Todo.css';

import DeleteIcon from '@material-ui/icons/Delete';
import {
//   Button,
//   FormControl,
//   InputLabel,
//   Input,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
//   Avatar,
} from "@material-ui/core";
import {db} from '../firebase';

function Todo(props) {

  return (
      <div className="todo_container">
    <List className="todo_list">
      <ListItem className="todo__listitem">
        <ListItemAvatar>
         
            <ListItemText primary={props.todo.todo} secondary='dummy deadline' />
        </ListItemAvatar>

        <DeleteIcon className="todo__delete" onClick={event => 
        db.collection('todos')
        .doc(props.todo.id)
        .delete()
        }></DeleteIcon>

    </ListItem>
    </List>
    </div>
  );
}

export default Todo;
