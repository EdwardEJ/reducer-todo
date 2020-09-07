import React from 'react'
import { ACTIONS } from './App'

export default function Todo({ todo, dispatch }) {
  return (
    <div>
      <p style={{ color: todo.complete ? '#AAA' : '#000' }}>{todo.name}</p>
      <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })}>TOGGLE</button>
      <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}>CLEAR</button>
    </div>
  )
}