import React from 'react'
import { Header, UserLocation } from '../Componets/AllComponets'
import GoogleAPi from "../Componets/GoogleAPi";
import MoboxMap from '../Componets/MoboxMap';
import YandexAPi from "../Componets/YandexAPi"
const Welcome = () => {
  return (
    <div>
      <Header />
      {/* <UserLocation/> */}
      {/* <GoogleAPi /> */}
      <MoboxMap />
      {/* <YandexAPi/> */}
    </div>
  )
}

export default Welcome