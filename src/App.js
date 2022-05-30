import React, { useEffect } from 'react'
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './pages/Register';
import Welcome from "./pages/Welcome";
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { profileSend } from "./Redux/action/action";
import MoboxMap from './Componets/MoboxMap';
import HackYandexAPi from './Componets/HackYandexAPi';
import YandexAPi from './Componets/YandexAPi';
axios.defaults.baseURL = 'https://api-maps.yandex.ru/';
// axios.defaults.baseURL = 'https://powerful-anchorage-40100.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = "aplication/json";
axios.defaults.headers.post['Accept'] = "aplication/json";
axios.defaults.headers.get['cookie'] = `yandexuid=2487169591642704719; yuidss=2487169591642704719; ymex=1958064719.yrts.1642704719#1958064719.yrtsi.1642704719; is_gdpr=0; _ym_uid=1643708804963595966; _ym_d=1643708805; is_gdpr_b=CNyJdhDzaygC; mda=0; bltsr=1; skid=6202035691652368298; yabs-frequency=/5/00010000001qB8LY/; L=cSQEfQFAA15ZCXFwVVEHcXBValUCQ1IEBRoXOB5XLCZLDDoXDxQQBRIHRTU8IU87NT8nBTMGMAEgSxIVGg==.1653555546.14989.348684.1f257c21442931172ccea83849028deb; yandex_login=tursunboyevabdurasuldevolop@gmail.com; i=5CM/TvnT/Dhweu2cutAKVdgPDg+s5AddsuXOGqFbpSm6+nZe50Ibg+6aXQ6StWkqZJUKus8QIyTToarNPZZqDQ5Hz2c=; engineer=1; font_loaded=YSv1; ys=wprid.1653802447427592-1716341759742795446-sas3-1000-06c-sas-l7-balancer-8080-BAL-1902; yp=1656394453.los.1#1656394453.losc.0#1653900037.mct.null#1653916601.mcv.0#1653916601.mcl.emlu0o#1653916601.szm.1_100000023841858:1360x768:1236x597#1968915546.udn.cDp0dXJzdW5ib3lldmFiZHVyYXN1bGRldm9sb3BAZ21haWwuY29t; Session_id=3:1653885874.5.0.1653555546768:GUw2VA:4c.1.2:1|1638388207.-1.0.1:317680375|3:253083.196111.r3choSDM_N2DE3gLjfSr7Vo5Z2w; sessionid2=3:1653885874.5.0.1653555546768:GUw2VA:4c.1.2:1.499:1|1638388207.-1.0.1:317680375|3:253083.696485.u5OrzoxHy5ANwj1bobXu28C-a0A; _yasc=14e2hL5PJbe8GRdIpSIG9tMga0q6SxIHTwXQTJMA2caTJZHjS8MMf7QM7LFlPbbwB10=`;
axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config) {
  const token = JSON.parse(localStorage.getItem('profile')) || "";
  config.headers.Authorization = token ? `Bearer ${token.token}` : ''
  return config
});
const App = () => {
  const state = useSelector(state => state.rootReducers.profile);
  console.log(state);
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem('profile')) {
      dispatch(profileSend(JSON.parse(localStorage.getItem('profile'))) || "")
    }
  }, [])
  useEffect(()=>{
    let key = "3261ce08-c60a-4114-96f8-ce820abf124a"
    axios.get(`/services/route/2.0/?callback=id_165391614780934393936&lang=ru_RU&token=d14aafc5a8bb458c87a76d0dbfd5d9ad&rll=71.6038519%2C40.9945728~71.6038519%2C40.9945728&rtm=dtr&results=3&apikey=3261ce08-c60a-4114-96f8-ce820abf124a`)
    .then(response => response.json())
    .then(json => console.log(json))
  },[])
  return (
    <div>
      <Router>
        
        <Routes>
          {/* {
            state !== null  ? <Route path='/' element={<Welcome />} />
              :
              <Route path='/' element={<Register />} />
          } */}
          <Route path='/' element={<Welcome />} />

        </Routes>
      </Router>
    </div>
  )
}

export default App