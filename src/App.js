import React, { useState } from "react";
import "./styles.css";

export default function App() {
  // Simple example of Array Destructuring
  const rainbow = ["orange", "yellow", "green", "blue"];
  const [orange, yellow, green, blue] = rainbow;

  // Swap the colors
  const [swap, setSwap] = useState(["orange", "yellow"]);

  // Destructuring for specific values
  var [, light, , , dark] = [
    "orange",
    "lightgreen",
    "yellow",
    "green",
    "darkseagreen"
  ];

  // No colors are copied
  const [, , , ,] = ["orange", "yellow", "green", "blue"];

  // Destructuring through Rest Parameter (...)
  const colors = ["red", "darkseagreen", "purple", "maroon"];
  const [red, ...rest] = ["red", ...colors, "maroon"];

  const swapColorFunction = () => {
    // Asignment operator "=" copies the ref to the original array
    // Spread Operator copies the values itself
    let swapColors = [...swap];
    [swapColors[1], swapColors[0]] = [swapColors[0], swapColors[1]];
    setSwap(swapColors);
  };

  return (
    <div className="app">
      <h1>Array Destructuring</h1>

      <div className="dstr-container">
        <h4>Simple destructuring method where all the colors are copied.</h4>
        <div className="justify-content-center simple-dstr">
          {[orange, yellow, green, blue].map((item, index) => {
            return (
              <div key={index} style={{ backgroundColor: item }}>
                {item}
              </div>
            );
          })}
        </div>
      </div>

      <div className="dstr-container">
        <h4>Simple destructuring method where only two colors are copied.</h4>
        <div className="justify-content-center simple-dstr">
          {[light, dark].map((item, index) => {
            return (
              <div key={index} style={{ backgroundColor: item }}>
                {item}
              </div>
            );
          })}
        </div>
      </div>

      <div className="dstr-container">
        <h4>Commonly used for swapping two array elements</h4>
        <div className="simple-dstr">
          {swap.map((item, index) => {
            return (
              <div key={index} style={{ backgroundColor: item }}>
                {item}
              </div>
            );
          })}
        </div>
        <button onClick={swapColorFunction}>Swap Colors</button>
      </div>

      {/* Destructuring through Rest Parameter (...)  */}
      <div className="dstr-container">
        <h4>Simple destructuring method where only two colors are copied.</h4>
        <div className="justify-content-center simple-dstr">
          {rest.map((item, index) => {
            return (
              <div
                key={index}
                style={{ backgroundColor: item, color: "white" }}
              >
                {item}
              </div>
            );
          })}
          <div style={{ backgroundColor: red, color: "white" }}>{red}</div>
        </div>
      </div>
    </div>
  );
}
