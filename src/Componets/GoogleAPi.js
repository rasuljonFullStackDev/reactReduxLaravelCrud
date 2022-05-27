import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { useJsApiLoader, GoogleMap } from '@react-google-maps/api';
const center = { let: 48.8584, lan: 2.2945 }
const GoogleApi = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  const containerStyle = {
    width: '400px',
    height: '400px'
  };
  const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API;
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: API_KEY
  })
  return (

    <div className='maps'>
     
      <div className="maps_cartaa">
        <GoogleMap    
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
       >
        </GoogleMap>
      </div>

    </div>
  );
};

export default GoogleApi;