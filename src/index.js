import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

// ReactDOM.render(<App />, document.getElementById("root"));
//this way is old now

const container = document.getElementById("root");

//create a root
const root = ReactDOM.createRoot(container);

//Initial render
root.render(<App />);