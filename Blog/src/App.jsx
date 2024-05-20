import { useState } from 'react'
import './App.css'

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  //const person = {name:"michael", job:"worker", age:"27", color:"white", funny:"yes"};
  const link = "https://www.google.com";
  return (
    <>
      <div>
        <div className="content">
          <h1>{title}</h1>
          <p>Liked {likes} times</p>
          {/* <p>{person}</p> */}
          <p>{10}</p>
          <p>{"hello"}</p>
          <p>{[1,2,3,4,5]}</p>
          <p>{Math.random() * 10}</p>
          <a href={link}>Google</a>
        </div>
      </div>
    </>
  )
}

export default App
