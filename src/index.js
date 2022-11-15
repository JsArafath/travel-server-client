import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Usercontext from "./components/Context/Usercontext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Usercontext>
      <App />
    </Usercontext>
  </React.StrictMode>
);

reportWebVitals();
