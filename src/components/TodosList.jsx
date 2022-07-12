import React from 'react'
import classes from '../styles/TodosList.module.css'
import Todo from './Todo';

const TodosList = ({todos,setTodos}) => {
    console.log('render todos')
    return (
        <div className={classes.todos}>
            {todos.map((todo,index) => 
                <Todo key={todo.id} todos={todos} setTodos={setTodos} todo={todo}/>
            )}
        </div>
    )
}


export default TodosList;