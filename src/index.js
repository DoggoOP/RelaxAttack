import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import {INTJ, INTP, ENTJ, ENTP, INFJ, INFP, ENFJ, ENFP, ISTJ, ISFJ, ESTJ, ESFJ, ISTP, ISFP, ESTP, ESFP} from './pages'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MemoryRouter>
    <Routes>  
      <Route path='/' element={<App />}/>
      <Route path='intj' element={<INTJ />}></Route>
      <Route path='intp' element={<INTP />}></Route>
      <Route path='entj' element={<ENTJ />}></Route>
      <Route path='entp' element={<ENTP />}></Route>
      <Route path='infj' element={<INFJ />}></Route>
      <Route path='infp' element={<INFP />}></Route>
      <Route path='enfj' element={<ENFJ />}></Route>
      <Route path='enfp' element={<ENFP />}></Route>
      <Route path='istj' element={<ISTJ />}></Route>
      <Route path='isfj' element={<ISFJ />}></Route>
      <Route path='estj' element={<ESTJ />}></Route>
      <Route path='esfj' element={<ESFJ />}></Route>
      <Route path='istp' element={<ISTP />}></Route>
      <Route path='isfp' element={<ISFP />}></Route>
      <Route path='estp' element={<ESTP />}></Route>
      <Route path='esfp' element={<ESFP />}></Route>
      

    </Routes>
  </MemoryRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
