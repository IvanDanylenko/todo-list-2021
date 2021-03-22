import React, { useState } from "react"
import { RiCloseCircleLine } from "react-icons/ri"
import { TiEdit } from "react-icons/ti"
import { BsCheck, BsCheckAll } from "react-icons/bs"
import TodoForm from "./TodoForm"

function Todo({
  todos,
  completeTodo,
  removeTodo,
  updateTodo,
}) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  })

  const submitUpdate = (value) => {
    updateTodo(edit.id, value)
    setEdit({
      id: null,
      value: "",
    })
  }

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />
  }

  return todos.map((todo, index) => (
    <div
      className={
        todo.isComplete ? "todo-row complete" : "todo-row"
      }
      key={index}
    >
      <div
        className='todo-text'
        onClick={() => {
          completeTodo(todo.id)
        }}
      >
        {todo.value}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => {
            setEdit({ id: todo.id, value: todo.value })
          }}
          className='edit-icon'
        />
        {todo.isComplete ? (
          <BsCheckAll
            onClick={() => completeTodo(todo.id)}
            className='edit-icon'
          />
        ) : (
          <BsCheck
            onClick={() => completeTodo(todo.id)}
            className='edit-icon'
          />
        )}
      </div>
    </div>
  ))
}

export default Todo
