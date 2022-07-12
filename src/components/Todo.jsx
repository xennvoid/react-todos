import React, { useState } from 'react';
import classes from '../styles/Todo.module.css';
import { MdDeleteForever,MdEditNote } from 'react-icons/md';

const Todo = ({todos,setTodos, todo}) => {
    console.log('render Todo')
    function deleteTodo(id) {
        const removeItem = todos.filter((todo) => {
            return todo.id !== id;
          });
        setTodos(removeItem);
    }

    function todoCompleted(id) {
        const completed = todos.map((todo) => {
            if(todo.id === id)
                todo.completed = !todo.completed;
            return todo;
          });
        setTodos(completed);
    }


    return (
        <div className={`${classes.todo} ${todo.completed? classes.completed : ''}`} onClick={() => todoCompleted(todo.id)}>
            <textarea 
                className={classes.todo__content} 
                value={todo.text}
                onChange={() => console.log()}
                rows="10"
                cols="45"
                readOnly
            >
            </textarea>
            <div className={classes.todo__footer}>
                <div>
                    {todo.date}
                </div>
                <div 
                    className={classes.todo__delete} 
                    onClick={(e) => {
                        e.stopPropagation()
                        deleteTodo(todo.id)
                    }}
                    >
                    <MdDeleteForever size="2em"/>
                </div>
            </div>
        </div>
    )
}


export default Todo;