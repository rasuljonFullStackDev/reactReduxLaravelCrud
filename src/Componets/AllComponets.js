import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { profileEdit } from "../Redux/action/action"
import { Avatar, Button, Form, Modal, PageHeader, Tooltip, Input, Card } from 'antd';
import { AntDesignOutlined, LogoutOutlined, EditOutlined, UserOutlined, InboxOutlined } from '@ant-design/icons';
import axios from 'axios';
import Swal from 'sweetalert2';
import { logout } from '../Redux/action/action';
import { Link } from 'react-router-dom';
// map
import { YMaps, Map, Placemark, RoutePanel } from 'react-yandex-maps';
export const Header = () => {
    const [form] = Form.useForm();
    const profile = useSelector(state => state.rootReducers.profile);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [file, setFile] = useState(null);
    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const showModal = () => {
        setIsModalVisible(true);
    };
    // profilfdan chiqish
    const dispatch = useDispatch();
    const logut = () => {
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post('/api/logout').then(res => {
                if (res.status === 200 && res.data.xabar) {
                    Swal.fire({
                        title: 'Tabriklaymiz!',
                        text: res.data.xabar,
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    dispatch(logout());
                }
            });
        });
    }

    const profileImgUpload = (e) => {
        setFile(e.target.files[0])


    }
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        let profileEditData = new FormData();
        profileEditData.append('img', file);
        profileEditData.append('username', values.username);
        profileEditData.append('email', values.email);
        profileEditData.append('id', profile.user.id);

        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post('/api/profile', profileEditData)
                .then((res) => {
                    if (res.status === 200 && res.data.user) {
                        dispatch(profileEdit(res.data.user));
                    }
                })
        })
    };
    form.setFieldsValue({
        username: profile.user.username,
        email: profile.user.email,
    });
    return (
        <>
            <PageHeader
                className="site-page-header"
                title="React with Laravel Api"
                extra={[
                    <Link key="1" to="/s">Foydalanuvchilar</Link>,
                    <Link key="12" to="/sa">Maxsulot</Link>,
                    <Tooltip key="0" onClick={showModal} title={profile.user.username} >
                        <Avatar
                            size={48}
                            src={"https://powerful-anchorage-40100.herokuapp.com/" + profile.user.img}
                        // icon={<AntDesignOutlined />}
                        />
                    </Tooltip>,
                ]}
            />
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}
                footer={false}
                id="center"
            >
                <div className="center">
                    <Tooltip key="0" title={profile.user.username} >
                        <Avatar
                            size={64}
                            src={"https://powerful-anchorage-40100.herokuapp.com/" + profile.user.img}
                            icon={<AntDesignOutlined />}
                        />
                    </Tooltip>


                    <div>
                        <div className="edits" style={{ marginTop: "10px" }}>
                            <Button type='danger' onClick={logut}>
                                <LogoutOutlined />
                            </Button>
                            <Button type='primary' onClick={logut} style={{ marginLeft: "5px" }}>
                                <EditOutlined />
                            </Button>
                        </div>
                    </div>
                </div>
                {/* edit profile */}
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    form={form}
                    encType="multipart/form-data"
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Email!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="email" />
                    </Form.Item>

                    <Button>
                        <label type="primary" htmlFor="file" style={{ width: "100%" }}>  <AntDesignOutlined /></label>
                    </Button>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        Or <a href="">register now!</a>
                    </Form.Item>
                </Form>
                <input type="file" onChange={profileImgUpload} id='file' style={{ display: "none" }} />
            </Modal>
        </>
    )
};

export const UserLocation = () => {
    const profile = useSelector(state => state.rootReducers.profile);
    const test = `<Card title="Default size card"  size='large' >
    <p>Card content</p>
    <Avatar src="https://powerful-anchorage-40100.herokuapp.com/${profile.user.img}" />
    <p>Card content</p>
    <img src='https://powerful-anchorage-40100.herokuapp.com/${profile.user.img}'/>
    <p>Card content</p>
</Card>`

    // ymaps.ready(init)
    // function init(params) {
    //     var map = new ymaps.Map('map',{
    //         center:[41.317321, 69.279732,39.042111, 70.848057]
    //     })
    // }
    const colculate = () =>{
        YMaps.route(['','']).then(function(route){
            console.log(route);
        })
    }
    colculate()
    return (
        <>
            <YMaps
                query={{
                    ns: 'use-load-option',
                    load:
                        'Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon',
                }}
            // style={{ width: "320px;", height: "240px;" }}
            >
                <Map
                    defaultState={{
                        center: [41.000085, 71.672579],
                        zoom: 5,
                        controls: ['fullscreenControl'],
                        
                    }}

                >
                    {/* <Placemark
                        defaultGeometry={[41.000085, 71.672579]}
                        properties={{
                            balloonContentBody: test,
                            iconLayout: 'default#image',
                            iconImageHref: `https://powerful-anchorage-40100.herokuapp.com/${profile.user.img}`,
                            iconImageSize: [46, 57],

                        }}
                        options={{
                            iconLayout: 'default#image',
                            iconImageHref: `https://powerful-anchorage-40100.herokuapp.com/${profile.user.img}`,
                            iconImageSize: [46, 46],

                        }}
                    /> */}
                    <RoutePanel options={{
                        float: 'right' , from: "moscow",
                        to: "saint petersburg",
                        type: "auto",
                        get:{
                            from: "moscow",
                            to: "saint petersburg",
                        }
                        
                    }}  />
                </Map>

            </YMaps>
        </>
    )
}