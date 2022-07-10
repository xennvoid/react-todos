import React, { useState } from 'react'
import classes from '../styles/AddTodo.module.css'
import {nanoid} from 'nanoid'

const AddTodo = ({todos, setTodos}) => {
    
    const [inputText, setInputText] = useState('')

    const addTodo = () => {
        if(inputText !== '') {
            console.log('Adding')

            const date = new Date()
            const newTodo = {id:nanoid(),text:inputText,completed:false,date:date.toLocaleDateString()}
            setTodos([...todos, newTodo])
            setInputText('');
        }
    }

    return (
        <form className={classes.todos__form} onSubmit={e => e.preventDefault()}>
            <input 
                className={classes.todo__input} 
                type="text" 
                placeholder="Input todo..." 
                value={inputText} 
                onChange={(e) => setInputText(e.target.value)}
            />
            <input 
                className={classes.todo__add} 
                type="submit" 
                value={"ADD"} 
                onClick={addTodo}
            />
        </form>
    )
}

export default AddTodo;