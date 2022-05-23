import React, { useEffect, useLayoutEffect } from 'react'
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './pages/Register';
import Welcome from "./pages/Welcome";
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { profileSend } from "./Redux/action/action";
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
  const state = useSelector(state => state.rootReducers.profile);
  console.log(state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(profileSend(JSON.parse(localStorage.getItem('profile'))) || "")
  }, [])
  return (
    <div>
      <Router>
        <Routes>
          {
            state !== null  ? <Route path='/' element={<Welcome />} />
              :
              <Route path='/' element={<Register />} />
          }


        </Routes>
      </Router>
    </div>
  )
}

export default App