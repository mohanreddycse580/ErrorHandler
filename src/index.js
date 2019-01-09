import React from "react";
import ReactDOM from "react-dom";
import FiveMax from "./FiveMax";
import "./styles.css";
import Shield from "./Shield";
function App() {
  return (
    <div>
      <h3>
        Two children under one error boundary. If one crashes. Both are
        affected!
      </h3>

      <Shield>
        <FiveMax />
      </Shield>
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
