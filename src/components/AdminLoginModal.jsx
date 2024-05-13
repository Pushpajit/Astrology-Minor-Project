import React, { useState } from 'react';
import { Modal, Button, Checkbox, Form, Input } from 'antd';

async function signin(data) {
    const URL = `https://online-panchang.onrender.com/api/signin`;
    console.log(data);

    const res = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(data)
    });

    if (res.ok) {
        alert("You're Now Admin");
        const result = await res.json();
        localStorage.setItem("token", JSON.stringify(result?.token));
    } else {
        alert('Something Went Wrong, Check your username or password');
    }

}

function AdminLoginModal({ open, setOpen, setRender }) {

    const [confirmLoading, setConfirmLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [form] = Form.useForm();

    console.log(username, password);

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handleOk = async () => {
        setConfirmLoading(true);
        const res = await signin({ username, password });
        
        setRender(prev => !prev);
        setOpen(false);
        setConfirmLoading(false);
        handleCancel();
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        form.setFieldsValue({
            username: '',
            password: ''
        });
        setUsername('');
        setPassword('');
        setOpen(false);
    };

    const onUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    };

    return (
        <>
            {/* <Button type="primary" onClick={showModal}>
                Open Modal with async logic
            </Button> */}
            <Modal
                // title="Admin Login"
                centered
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                okType='default'
                okText='Login'
            >
                <p className='text-center font-semibold text-lg mb-5'>Admin Login</p>
                <Form
                    name="basic"
                    form={form}
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="on"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input  onChange={onUsernameChange} />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password content={password}  onChange={onPasswordChange} />
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >

                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};


export default AdminLoginModal
