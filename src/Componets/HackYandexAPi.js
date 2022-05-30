import axios from 'axios'
import React,{useEffect} from 'react'

const HackYandexAPi = () => {
  const APP_KEY  = process.env.APP_KEY

    useEffect(()=>{
      let key = "3261ce08-c60a-4114-96f8-ce820abf124a"
      fetch(`https://api-maps.yandex.ru/services/route/2.0/?callback=id_165391612930719507170&lang=ru_RU&token=d14aafc5a8bb458c87a76d0dbfd5d9ad&rll=71.672579%2C41.000085~69.279737%2C41.311158&rtm=dtr&results=3`)
      .then(response => response.json())
      .then(json => console.log(json))
    },[])
  return (
    <div>HackYandexAPi</div>
  )
}

export default HackYandexAPi