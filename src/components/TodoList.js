import React, { useState } from "react"
import TodoForm from "./TodoForm"
import Todo from "./Todo"

function TodoList() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    if (!todo.value || /^\s*$/.test(todo.value)) {
      return
    }

    const newTodos = [todo, ...todos]

    setTodos(newTodos)
  }

  const updateTodo = (todoId, newValue) => {
    if (!newValue.value || /^\s*$/.test(newValue.value)) {
      return
    }

    setTodos((prev) =>
      prev.map((item) =>
        item.id === todoId ? newValue : item
      )
    )
  }

  const removeTodo = (id) => {
    const removeArr = [...todos].filter(
      (todo) => todo.id !== id
    )

    setTodos(removeArr)
  }

  const completeTodo = (id) => {
    let updetedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
      return todo
    })

    setTodos(updetedTodos)
  }

  return (
    <div>
      <h1>What's the Plan for Today</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  )
}

export default TodoList
