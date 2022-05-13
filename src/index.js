import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; //improt dari file app
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //root merender app membaca  file js app.js
  <React.StrictMode>
    <App />
  </React.StrictMode>

);

const root2 = ReactDOM.createRoot(document.getElementById('example'));
root2.render(<h style={{textAlign: 'center'}}>Hello</h> )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
