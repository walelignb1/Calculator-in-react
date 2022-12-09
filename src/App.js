import React, { useState } from "react";
import "./App.css"

const App = () => {

  const [answer, setAnswer] = useState("")
  const [result, setResult] = useState("")

  const clickHandle = (symbol) =>{
    setAnswer((prev) => prev + symbol)
    if(answer[answer.length -1] === "="){
      if(/[1-9.]/.test(symbol)){
        setAnswer(symbol)
      }else{
        setAnswer(answer + symbol)
      }
    }
  }

  const clearDisplay = () =>{
    setResult("")
    setAnswer("")
  }

  const calculator = () =>{
    try {
      setResult(eval(answer))
      setAnswer((prev) => prev + "=")
    } catch (error) {
      setResult("Error")
    }
  }
let display = answer + result
  
  return (
    <div>
      <div id="app">
          <div className="calculator">
              <div className="formulaScreen">{display}</div>
              <input id="display" type="text" placeholder="0" value={result}/>
              <div>
                  <button className="jumbo" id="clear" value="AC" Style="background: rgb(172, 57, 57);" onClick={clearDisplay}>AC</button>
                  <button id="divide" value="/" Style="background: rgb(102, 102, 102);" onClick={() =>clickHandle("/")}>/</button>
                  <button id="multiply" value="*" Style="background: rgb(102, 102, 102);" onClick={() =>clickHandle("*")}>x</button>
                  <button id="seven" value="7" onClick={() =>clickHandle("7")}>7</button>
                  <button id="eight" value="8" onClick={() =>clickHandle("8")}>8</button>
                  <button id="nine" value="9" onClick={() =>clickHandle("9")}>9</button>
                  <button id="subtract" value="-" Style="background: rgb(102, 102, 102);" onClick={() =>clickHandle("-")}>-</button>
                  <button id="four" value="4" onClick={() =>clickHandle("4")}>4</button>
                  <button id="five" value="5" onClick={() =>clickHandle("5")}>5</button>
                  <button id="six" value="6" onClick={() =>clickHandle("6")}>6</button>
                  <button id="add" value="+" Style="background: rgb(102, 102, 102);" onClick={() =>clickHandle("+")}>+</button>
                  <button id="one" value="1" onClick={() =>clickHandle("1")}>1</button>
                  <button id="two" value="2" onClick={() =>clickHandle("2")}>2</button>
                  <button id="three" value="3" onClick={() =>clickHandle("3")}>3</button>
                  <button className="jumbo" id="zero" value="0" onClick={() =>clickHandle("0")}>0</button>
                  <button id="decimal" value="." onClick={() =>clickHandle(".")}>.</button>
                  <button id="equals" value="=" Style="background: rgb(0, 68, 102); position: absolute; height: 130px; bottom: 5px;" onClick={calculator}>=</button>
              </div>
          </div>
      </div>
      <div className="author"> Designed and Coded By <br/><a href="https://goo.gl/6NNLMG">Peter Weinberg</a></div>
    </div>
  )
}

export default App
