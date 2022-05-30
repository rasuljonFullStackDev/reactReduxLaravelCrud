import React, { useEffect } from 'react'
import { YMaps } from 'react-yandex-maps'
import "https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=3261ce08-c60a-4114-96f8-ce820abf124a"
const YandexAPi = () => {
  const APP_KEY  = process.env.APP_KEY
  useEffect(()=>{
    YMaps.ready(function () {
      var myMap = new YMaps.Map('map', {
          center: [55.753994, 37.622093],
          zoom: 9,
          // Добавление панели маршрутизации на карту.
          controls: ['routePanelControl']
      });

      // Получение ссылки на панель.
      var control = myMap.controls.get('routePanelControl');
      console.log(control);
      control.routePanel.state.set({
          // Адрес начальной точки.
          from: "location_input1.value",
          // Адрес конечной точки.
          to: "location_input2.value"
      });
      // Получение объекта, описывающего построенные маршруты.
      var multiRoutePromise = control.routePanel.getRouteAsync();
      multiRoutePromise.then(function (multiRoute) {
          //  Подписка на событие получения данных маршрута от сервера.
          multiRoute.model.events.add('requestsuccess', function () {
              // Ссылка на активный маршрут.
              var activeRoute = multiRoute.getActiveRoute();
              if (activeRoute) {
                  // Вывод информации об активном маршруте.
                  console.log("Длина: " + activeRoute.properties.get("distance").text);
                  console.log("Время прохождения: " + activeRoute.properties.get("duration").text);
                  // distance.textContent = activeRoute.properties.get("distance").text
                  // distance_m.textContent = parseFloat(activeRoute.properties.get("distance").text) * 1000
              }
          });
          multiRoute.options.set({
              // Цвет метки начальной точки.
              wayPointStartIconFillColor: "#B3B3B3",
              // Цвет метки конечной точки.
              wayPointFinishIconFillColor: "blue",
              // Внешний вид линий (для всех маршрутов).
              routeStrokeColor: "00FF00"
          });
      }, function (err) {
          console.log(err);
      });
  });

  },[])
  return (
    <div>YandexAPi</div>
  )
}

export default YandexAPi