import React from 'react'
import classes from '../styles/SortingTodos.module.css'

const SortingTodos = ({setFilterStatus}) => {

  function handleFilterStatus(e) {
    setFilterStatus(e.target.value)
  }

  return (
    <select className={classes.todos__sort} onChange={(e) => handleFilterStatus(e)}>
        <option disabled>{'<'} Filter Todos {'>'}</option>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
    </select>
  )

}

export default SortingTodos;
