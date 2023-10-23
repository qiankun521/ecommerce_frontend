import styles from '../assets/styles/RegisterPage.module.css'
import { Form, Input, Button, message } from 'antd';
import register from '../utils/register'
import { useDispatch } from 'react-redux';
import { registerSuccess, registerFailure, registerRequest } from "../redux/actions/loginRegisterAction";
import { useNavigate } from 'react-router';
import {useRef} from 'react';

function RegisterPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const completeMessage=useRef(null);
    function onFinish(values) {
        dispatch(registerRequest());
        message.loading({
            content: '注册中，请稍候...',
            style: {
                marginTop: '1vh',
            },
            duration: 0
        });
        register(values.username, values.password).then((value) => {
            message.destroy();
            completeMessage.current=value.msg;
            if (value.status === 200) {
                dispatch(registerSuccess(value.msg));//200时后端返回msg:ok
                message.success({
                    content: "注册成功",
                    style: {
                        marginTop: '1vh',
                    },
                    onClick: () => {
                        navigate('/login');
                    }
                });
                navigate('/login');
            }
            else{
                dispatch(registerFailure(value.msg));//30001时后端返回msg:注册时用户已存在
                message.error({
                    content: completeMessage.current,
                    style: {
                        marginTop: '1vh',
                    }
                });
            }

        }).catch((error) => {
            console.log(error);
        })
    }
    function onFinishFailed(errorInfo) {
    }
    return (
        <div className={styles.page}>
            <h1 style={{
                fontSize: "1.7rem",
                marginTop: "1rem",

            }}>注册</h1>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    width: "40vw",
                    marginRight: "15vw"
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="用户名"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: '请输入用户名!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: '请输入密码!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        注册
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
export default RegisterPage;