import React from 'react'
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './pages/Register';
import axios from 'axios';
axios.defaults.baseURL = 'http://127.0.0.1:8000/';
axios.defaults.headers.post['Content-Type'] = "aplication/json";
axios.defaults.headers.post['Accept'] = "aplication/json";
axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');
  config.headers.Authorization = token ? `Bearer ${token}` : ''
  return config
});
const App = () => {
  return (
    <div>
        <Router>
          <Routes>
            <Route path='/' element={<Register/>}/>
          </Routes>
        </Router>
    </div>
  )
}

export default App