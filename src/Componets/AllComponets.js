import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Button, Modal, PageHeader, Tooltip } from 'antd';
import { AntDesignOutlined,LogoutOutlined } from '@ant-design/icons';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { logout } from '../Redux/action/action';
export const Header = () => {
    const profile = useSelector(state => state.rootReducers.profile);
    const [isModalVisible, setIsModalVisible] = useState(false);
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
    const logut = () =>{
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post('/api/logout').then(res => {
                if(res.status===200 && res.data.xabar){
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
    return (
        <>
            <PageHeader
                className="site-page-header"
                onBack={() => null}
                title="Title"
                subTitle="This is a subtitle"
                extra={[
                    <Tooltip key="0" onClick={showModal} title={profile.user.username} >
                        <Avatar
                            size={{
                                xs: 24,
                                sm: 32,
                                md: 40,
                                lg: 64,
                                xl: 64,
                            }}
                            icon={<AntDesignOutlined />}
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
                            size={{
                                xs: 24,
                                sm: 32,
                                md: 40,
                                lg: 64,
                                xl: 64,
                            }}
                            icon={<AntDesignOutlined />}
                        />
                    </Tooltip>
                   <div>
                   <Button type='danger' onClick={logut}>
                    <LogoutOutlined />
                    </Button>
                   </div>
                </div>
            </Modal>
        </>
    )
};

