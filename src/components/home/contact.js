import React from "react";
import {Row, Col, Form, Input, Button, Checkbox} from 'antd';
 
const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

function AppContact() {
    return (
        <div id="contact" className="section Contact">  
            <div className="antContainer">
                <div className="title align-center"> 
                    <h2>Contact Us</h2>
                    <p>Please complete the following form</p>
                </div> 
                <Form
                name="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                >
                <Form.Item
                    name="username"
                    rules={[{ required: true, placeholder: 'Please input your username!', message: 'Please input your username!' }]}
                >
                    <Input placeholder="Please input your username!" />
                </Form.Item>

                <Form.Item
                    name="Email address"
                    rules={[{ required: true, placeholder: 'Please input your email address!', message: 'Please input your email address!' }]}
                >
                    <Input placeholder="Please input your email address!" />
                </Form.Item>

                <Form.Item
                    name="Telephone"
                    rules={[{ required: true, placeholder: 'Please input your telephone number!', message: 'Please input your telephone number!' }]}
                >
                    <Input placeholder="Please input your telephone number!" />
                </Form.Item>

                <Form.Item
                    name="comments"
                    rules={[{ required: true, placeholder: 'Comments', message: 'Comments' }]}
                >
                     <Input.TextArea placeholder="Comments" />
                </Form.Item>



                <Form.Item name="remember" valuePropName="checked" wrapperCol={{ span: 16 }}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ span: 16 }}>
                    <Button shape="round" size="large" type="primary" htmlType="submit">
                    Submit
                    </Button>
                </Form.Item>
                </Form>
            </div>
        </div>           
    )
}

export default AppContact;