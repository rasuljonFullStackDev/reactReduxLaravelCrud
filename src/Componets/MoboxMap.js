import React, { useEffect, useState } from 'react'
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import { UserOutlined, LockOutlined, PhoneOutlined } from '@ant-design/icons';
const MoboxMap = () => {
  let token = "pk.eyJ1IjoiZmFraHIiLCJhIjoiY2pseXc0djE0MHBibzN2b2h4MzVoZjk4aSJ9.ImbyLtfsfSsR_yyBluR8yQ";
  const [kor, setKor] = useState({ one1: 41.002399, one2: 71.226422, two1: "", two2: 
  "", distance:null })
  // useEffect(() => {
  //   https://yandex.uz/maps/?ll=75.468577%2C38.894483&mode=routes&routes%5BactiveComparisonMode%5D=auto&routes%5BignoreTravelModes%5D=bicycle%2Cscooter&rtext=41.395760%2C69.320464~41.036878%2C71.696873&rtt=comparison&ruri=~&z=6.85
  //   fetch(`https://api.mapbox.com/directions/v5/mapbox/cycling/${kor.one1},${kor.one2};${kor.two1},${kor.two2}?geometries=geojson&steps=true&access_token=${token}`)
  //     .then(response => response.json())
  //     .then(json => {
  //       console.log(json.routes[0].distance);
  //       console.log(json)
  //     })
  // }, [])
  const tozalash = () =>{
    setKor1(41.311158)
    setKor2(69.279737)
    setKor3(null)
    setKor4(null)
    setDistance(null)
  }
  const [kor1,setKor1] = useState(null)
  const [kor2,setKor2] = useState(null)
  const [kor3,setKor3] = useState(null)
  const [kor4,setKor4] = useState(null)
  const [distance,setDistance] = useState(null)
  const onlocationOne = (values) => {
      navigator.geolocation.getCurrentPosition((location)=>{
        setKor1(location.coords.latitude)
        setKor2(location.coords.longitude)
      })
  }
  const onlocationTwo = (values) => {
    navigator.geolocation.getCurrentPosition((location)=>{
      setKor3(location.coords.latitude)
      setKor4(location.coords.longitude)

    })
  }

  const masofa = () =>{
    fetch(`https://api.mapbox.com/directions/v5/mapbox/cycling/37.75685243925432,55.68113528427267;37.75120907148943,55.67994363352187?geometries=geojson&steps=true&access_token=pk.eyJ1IjoiZmFraHIiLCJhIjoiY2pseXc0djE0MHBibzN2b2h4MzVoZjk4aSJ9.ImbyLtfsfSsR_yyBluR8yQ`)
      .then(response => response.json())
      .then(json => {
        console.log(json.routes[0].distance * 0.001);
        setDistance(json.routes[0].distance)
      })
  }

  return (
    <div className='forms'>
      <Row>
        <Col lg={12} sm={24} className="cols">
          <Form
            name="normal_login"
            className="login-form"
            size='large'
            onFinish={onlocationOne}
          >
            <Form.Item
              name="location"
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} defaultValue={kor1 + "," + kor2} placeholder="Username" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                laoction 1
              </Button>
            </Form.Item>
          </Form>
        </Col >
        <Col lg={12} sm={24} className="cols">
          <Form
            size='large'
            onFinish={onlocationTwo}
          >
            <Form.Item
              name="location 2"
             
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="location 2" defaultValue={kor3 +"," + kor4} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                laoction 2
              </Button>
            </Form.Item>
          </Form>
        </Col >
      </Row>

      <div>
        <h1  >loation 1 : <span style={{ color:"red" }}> {kor1},{kor2}</span></h1>
      </div>
      <div>
        <h1>loation 2: <span style={{ color:"red" }}> {kor3},{kor4} </span></h1>
      </div>
      <div>
        <h1>loation masofa: <b>{distance}</b></h1>
      </div>
      <Button type='primary' onClick={masofa}>
        masofani bilish
      </Button>
      <Button type='primary' onClick={tozalash}>
      tozalash
      </Button>

    </div>
  )
}

export default MoboxMap