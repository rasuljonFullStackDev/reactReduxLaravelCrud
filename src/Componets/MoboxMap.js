import React,{useEffect,useState} from 'react'
const MoboxMap = () => {
    let token  = "pk.eyJ1IjoiZmFraHIiLCJhIjoiY2pseXc0djE0MHBibzN2b2h4MzVoZjk4aSJ9.ImbyLtfsfSsR_yyBluR8yQ";
    const [kor,setKor] = useState({one1:-122.66237139672404,one2:45.533429374571256,two1:-122.68983721703864, two2:45.52266618529282})
    useEffect(()=>{

        fetch(`https://api.mapbox.com/directions/v5/mapbox/cycling/${kor.one1},${kor.one2};${kor.two1},${kor.two2}?geometries=geojson&steps=true&access_token=${token}`)
        .then(response => response.json())
        .then(json => {
            console.log(json.routes[0].distance*0.001);
            console.log(json)})
    },[])
  return (
    <div>
api
        
    </div>
  )
}

export default MoboxMap