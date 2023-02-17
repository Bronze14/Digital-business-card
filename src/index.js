import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';

function Main(){
  return (
    <div className='FinalApp'>
      <App />
    </div>
  )
}
ReactDOM.render(<Main />, document.getElementById("root"))