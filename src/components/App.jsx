import React, { useState } from "react";

function App() {
 
var text="";

var [heading,setHeading]=useState("")
 
 function changed(e)
 {
return (text=e.target.value)
 }
 
 function clicked()
 {
  setHeading(text)
 }
 
 
 
 
  return (
    <div className="container">
      <h1>Hello {heading} </h1>
      <input onChange={changed} type="text" placeholder="What's your name?" />
      <button onClick={clicked}>Submit</button>
    </div>
  );
}

export default App;




