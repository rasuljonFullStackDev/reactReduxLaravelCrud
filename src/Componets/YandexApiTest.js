import React, { useEffect, useRef } from "react";
import { YMaps, Placemark, Map } from "react-yandex-maps";
export default function YandexApiTest() {

    useEffect(()=>{
        
    },[])
    const map = useRef(null);
    const mapState = {
        center: [55.739625, 37.5412],
        zoom: 12,
        // controls: ['routePanelControl']
    };
    let ymapsadd = null
    const addRoute = (ymaps) => {
        ymapsadd = ymaps
    };

    const addRouteYmps = (ymaps) => {
        const pointA = [55.717639, 37.779422];
        let pointB = [40.103093, 65.373970];
        let s= 0;
        const multiRoute = new ymaps.multiRouter.MultiRoute(
            {
                referencePoints: [pointA, pointB],
                params: {
                    routingMode: "auto", // https://yandex.ru/dev/maps/jsapi/doc/2.1/ref/reference/IMultiRouteParams.html
                }
                
            },
            {
                boundsAutoApply: true
            }
        );
        multiRoute.model.events.add('requestsuccess', function() {
            var activeRoute = multiRoute.getActiveRoute();
            console.log(activeRoute.properties.get("distance").value);
            console.log("Длина: " + activeRoute.properties.get("distance").text);
            console.log("Время прохождения: " + activeRoute.properties.get("duration").text);
            if (activeRoute.properties.get("blocked")) {
                console.log("На маршруте имеются участки с перекрытыми дорогами.");
            }
        });
    map.current.geoObjects.add(multiRoute);

    };
    
    // console.log(map);
    return (
        <div className="App">
            <YMaps query={{ apikey: 'fced5e55-2779-4df7-8baf-39cc561448b5' }}>
                <Map
                    modules={["multiRouter.MultiRoute"]}
                    state={mapState}
                    instanceRef={map}
                    onLoad={addRoute}
                >
                </Map>
            </YMaps>

            <button onClick={() => addRouteYmps(ymapsadd)}>send</button>
        </div>
    );
}