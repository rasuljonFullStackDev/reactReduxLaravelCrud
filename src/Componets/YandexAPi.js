import React from 'react'
import { YMaps, Map, Placemark } from 'react-yandex-maps'
const YandexAPi = () => {
  const load = (e) => {
    console.log(e);
  }
  const state = {
    center: [41.000085, 71.672579, 40.389420, 71.783009],
    zoom: 7,
  }
  let map = null,
    ymaps = null,
    route = null;
  const mapState = { center: [55.76, 37.64], zoom: 9, controls: [] };


  const handleApiAvaliable = ymaps => {
    ymaps = ymaps;
    console.log(ymaps.state);
    console.log(ymaps);
    let s = ymaps
  };
  const geo = (e) => {
    console.log(e);
  }
  const coordinates = [
    [55.684758, 37.738521],
    [57.684758, 39.738521]
  ];
  return (
    <div>
      <YMaps onApiAvaliable={geo} >
        <Map
          state={mapState}
          onLoad={load}
          instanceRef={ref => handleApiAvaliable(ref)}
        >
          {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}

        </Map>

      </YMaps>
    </div>
  )
}

export default YandexAPi