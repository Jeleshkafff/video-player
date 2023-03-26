import React from "react";
// import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
// ReactDOM.render(, );

const container = document.getElementById("root");

// Create a root.
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(
<BrowserRouter>
    <App />
</BrowserRouter>

);
