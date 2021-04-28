import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.css';
import SearchEngine from "./SearchEngine";


function App() {
  return (
    <div>

      <SearchEngine defaultCity="New York" />
      
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);
