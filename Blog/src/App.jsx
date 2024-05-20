import { useState } from 'react'
import './App.css'

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;

  return (
    <>
      <div>
        <div className="content">
          <h1>{title}</h1>
          <p>Liked {likes} times</p>
        </div>
      </div>
      
    </>
  )
}

export default App
