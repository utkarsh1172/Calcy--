// import logo from "./logo.svg";
import "./App.css";
// import styled from 'styled-components'
import React, { useState } from "react";

function App() {
  const [result, setResult] = useState("");

  const clickHandler = (e) => {
    setResult(result.concat(e.target.value));
  };

  const cleaDisply=()=>{
    setResult("")
  }

  const calculate = () => {
    setResult(eval(result).toString())
  }
  return (
    // <Container>
    <div className="container">
      <input type="text" placeholder="0" className="answer" value={result} />
      <input type="button" value="9" className="button" onClick={clickHandler}/>
      <input type="button" value="8" className="button" onClick={clickHandler}/>
      <input type="button" value="7" className="button" onClick={clickHandler}/>
      <input type="button" value="6" className="button" onClick={clickHandler}/>
      <input type="button" value="5" className="button" onClick={clickHandler}/>
      <input type="button" value="4" className="button" onClick={clickHandler}/>
      <input type="button" value="3" className="button" onClick={clickHandler}/>
      <input type="button" value="2" className="button" onClick={clickHandler}/>
      <input type="button" value="1" className="button" onClick={clickHandler}/>
      <input type="button" value="0" className="button" onClick={clickHandler}/>
      <input type="button" value="." className="button" onClick={clickHandler}/>
      <input type="button" value="+" className="button" onClick={clickHandler}/>
      <input type="button" value="-" className="button" onClick={clickHandler}/>
      <input type="button" value="*" className="button" onClick={clickHandler}/>
      <input type="button" value="/" className="button" onClick={clickHandler}/>
      <input type="button" value="%" className="button" onClick={clickHandler}/>
      <input type="button" value="Clear" className="buttons" onClick={cleaDisply} />
      <input type="button" value="=" className="buttons" onClick={calculate} />
    </div>
    // </Container>
  );
}

export default App;

// const Container = styled.div`
//    background-color: wheat
// `
