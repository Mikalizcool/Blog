import { useState } from 'react'
import Navbar from './Navbar'
import Home from './Home'

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  //const person = {name:"michael", job:"worker", age:"27", color:"white", funny:"yes"};
  const link = "https://www.google.com";
  return (
    <>
      <div className="app">
        <Navbar />
        <div className="content">
          <Home />
        </div>
      </div>
    </>
  )
}

export default App
