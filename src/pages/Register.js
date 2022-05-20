import { useState } from 'react';
import axios from 'axios';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, PhoneOutlined } from '@ant-design/icons';
import { useForm } from 'antd/lib/form/Form';
import Swal from 'sweetalert2';

const Register = () => {
    const [auth, setAuth] = useState(false);
    const [forget, setForget] = useState(false);
    const onFinish = async (values) => {
        if (auth) {
            let res = await axios.post('api/login', values)
                .catch((err) => {
                    console.log(err);
                })
            if (res.status === 200 && res.data.token.trim() !== "") {
                Swal.fire({
                    title: 'Tabriklaymiz!',
                    text: res.data.xabar,
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
        } else {
            let res = await axios.post('api/register', values)

                .catch((err) => {
                    console.log(err);
                })
            if (res.status === 200 && res.data.token.trim() !== "") {
                Swal.fire({
                    title: 'Tabriklaymiz!',
                    text: res.data.xabar,
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
        }
    };
    const [form] = Form.useForm();
    const authFun = () => {
        setAuth(!auth)
        form.resetFields();
    }
    return (
        <div className='register'>
            <div className="formChild" id="formChild">


                {forget ? "" : <>


                    <h1> {auth ? "Login in" : "Register"}</h1>
                    <Form
                        name="normal_login"
                        className="login-form"
                        size='large'
                        onFinish={onFinish}
                        form={form}

                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Username!',
                                },
                            ]}
                            hasFeedback
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        {
                            auth ? null :
                                <>
                                    <Form.Item
                                        name="email"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your Email!',
                                            },
                                        ]}
                                        hasFeedback
                                    >
                                        <Input
                                            prefix={<LockOutlined className="site-form-item-icon" />}
                                            type="email"
                                            placeholder="email"
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        name="phone"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your phone!',
                                            },
                                        ]}
                                        hasFeedback
                                    >
                                        <Input
                                            prefix={<PhoneOutlined className="site-form-item-icon" />}
                                            type="tel"
                                            placeholder="phone"
                                        />
                                    </Form.Item>
                                </>
                        }

                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                },
                            ]}
                            hasFeedback
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle hasFeedback>
                                <Checkbox>Eslab Qolaymi</Checkbox>
                            </Form.Item>
                            <br />
                            <a className="login-form-forgot" href="">
                                Parolni Tiklash
                            </a>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                {auth ? "Login in" : "Register"}
                            </Button>
                            <br />
                            <Button type='link' onClick={authFun}>  {!auth ? "Login" : "Register"}</Button>
                        </Form.Item>
                    </Form>
                </>
                }
            </div>
        </div>
    )
}

export default Register;