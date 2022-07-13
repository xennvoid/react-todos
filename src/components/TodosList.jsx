import React from 'react'
import classes from '../styles/TodosList.module.css'
import Todo from './Todo';

const TodosList = ({todos,setTodos,filteredTodos}) => {
    
    console.log(filteredTodos)
    
    return (
        <div className={classes.todos}>
            {filteredTodos.map(todo => 
                <Todo key={todo.id} todos={todos} setTodos={setTodos} todo={todo}/>
            )}
        </div>
    )
}


export default TodosList;