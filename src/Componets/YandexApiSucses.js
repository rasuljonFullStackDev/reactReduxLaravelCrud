import React, { useRef } from "react";
import { YMaps, Placemark, Map } from "react-yandex-maps";
export default function FeedbackItem() {
  const map = useRef(null);
  const mapState = {
    center: [55.739625, 37.5412],
    zoom: 12
  };

  const addRoute = (ymaps) => {
    const pointA = [55.717639, 37.779422];
    let pointB = [41.311158, 69.279737];

    const multiRoute = new ymaps.multiRouter.MultiRoute(
      {
        referencePoints: [pointA, pointB],
        params: {
          routingMode: "auto" // https://yandex.ru/dev/maps/jsapi/doc/2.1/ref/reference/IMultiRouteParams.html
        }
      },
      {
        boundsAutoApply: true
      }
    );
    // var multiRoutePromise = multiRoute.routePanel.getRouteAsync();

    // multiRoutePromise.then(function (multiRoute) {
    //   //  Подписка на событие получения данных маршрута от сервера.
    //   multiRoute.model.events.add('requestsuccess', function () {
    //     // Ссылка на активный маршрут.
    //     var activeRoute = multiRoute.getActiveRoute();
    //     if (activeRoute) {
    //       // Вывод информации об активном маршруте.
    //       console.log('Длина: ' + activeRoute.properties.get('distance').text);
    //       console.log('Время прохождения: ' + activeRoute.properties.get('duration').text);
    //     }
    //   });
    //   multiRoute.options.set({
    //     // Цвет метки начальной точки.
    //     wayPointStartIconFillColor: '#B3B3B3',
    //     // Цвет метки конечной точки.
    //     wayPointFinishIconFillColor: 'blue',
    //     // Внешний вид линий (для всех маршрутов).
    //     routeStrokeColor: '00FF00'
    //   });
    // }, function (err) {
    //   console.log(err);
    // });
    

    map.current.geoObjects.add(multiRoute);
  };

  console.log(map);
  return (
    <div className="App">
      <YMaps query={{ apikey: 'fced5e55-2779-4df7-8baf-39cc561448b5' }}>
        <Map
          modules={["multiRouter.MultiRoute"]}
          state={mapState}
          instanceRef={map}
          onLoad={addRoute}
        >
          <Placemark geometry={[41.311158, 69.279737]} />
        </Map>
      </YMaps>

      <button onClick={() => { addRoute([41.311158, 69.279737]) }}>send</button>
    </div>
  );
}