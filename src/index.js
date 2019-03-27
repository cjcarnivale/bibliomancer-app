import React from 'react';
import ReactDOM from 'react-dom'; 
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import { BooksProvider } from './Context'
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <BooksProvider>
      <App /> 
    </BooksProvider>
  </BrowserRouter>,
document.getElementById('root'))