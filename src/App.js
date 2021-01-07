import React , {useState , useEffect} from "react";
import {CopyToClipboard} from "react-copy-to-clipboard";
import "./styles.css";

export default function App() {
const colors = [
  "#79d70f",
  "#e9b0df",
  "#00917c",
  "#cdac81",
  "#a9294f",
  "#70af85",
  "#654062",
  "#a7c5eb",
  "#9f5f80",
  "#7e7474",
  "#f2dcbb",
  "#aa3a3a",
  "#ffa62b",
  "#790c5a",
  "#d2e603"
];

const [background , setBackground] = useState("#07031a");
const [current , setCurrent] = useState(null);

useEffect(() => {
  const timeOutId = setTimeout(() => {
  setCurrent(null);
  },5000);
   return () => clearTimeout(timeOutId);
},[current]);


  return (
    <div className="App" style={{background}}>
      {current !== null && <h4> Copied!! {current}</h4>}

    <div className="container">
     {colors.map( (color, index) => (
      <div className = "card" key = {index}>
        <div className="box"
        style={{
          background:color,
          filter :"brightness(105%)",
          boxShadow : color === background ? "0 0 10px white" : ""
        }}
        onClick={() => setBackground(color)} />

        <CopyToClipboard text={`color : ${color};`}>
          <p style={{ color : color === background ? "#fff" : color }}
          onClick={() => setCurrent(color)}>{color}</p>
        </CopyToClipboard>
        
      </div>
     ))}
 

    </div>

    </div>
  );
}
