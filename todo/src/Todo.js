import React from 'react'
import { ACTIONS } from './App'

export default function Todo({ todo, dispatch }) {
  return (
    <div>
      <p style={{ textDecoration: todo.complete ? 'line-through' : null }}>{todo.name}</p>
      <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })}>TOGGLE</button>
      <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}>CLEAR</button>
    </div>
  )
}