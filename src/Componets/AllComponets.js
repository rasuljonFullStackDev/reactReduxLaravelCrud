import { useSelector } from 'react-redux';
import { Avatar, Button, Modal, PageHeader, Tooltip } from 'antd';
import { AntDesignOutlined,LogoutOutlined } from '@ant-design/icons';
import { useState } from 'react';
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
                   <Button type='danger'>
                    <LogoutOutlined />
                    </Button>
                   </div>
                </div>
            </Modal>
        </>
    )
};

