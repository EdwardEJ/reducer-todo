import React from 'react'

export default function Todo({ todo }) {
  return (
    <div>
      <p style={{ color: todo.complete ? '#AAA' : '#000' }}>{todo.name}</p>
      <button>TOGGLE</button>
      <button>CLEAR</button>
    </div>
  )
}