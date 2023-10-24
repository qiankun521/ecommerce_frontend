import { Form, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom'
import styles from '../../assets/styles/LoginPage.module.css'
import loginRegister from '../../utils/loginRegister'
import { useDispatch } from 'react-redux';
import { loginSuccess, loginFailure, loginRequest } from "../../redux/actions/loginRegisterAction";
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import { useRef } from 'react';
import { useSelector } from 'react-redux';

function LoginPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const completeMessage = useRef(null);
    const loginWaiting = useSelector(state => state.loginRegister.loginWaiting);
    async function test() {//测试APi是否正常
        const promise = await fetch('http://147.182.167.70:3000/api/v1/ping');
        const response = await promise.json();
        message.success({
            content: response,
            style: {
                marginTop: '1vh',
            }
        });
    }
    function onFinish(values) {
        dispatch(loginRequest());
        message.loading({
            content: '登录中，请稍候...',
            style: {
                marginTop: '1vh',
            },
            duration: 0
        });
        loginRegister(values.username, values.password).then((value) => {
            message.destroy();
            completeMessage.current = value.msg;
            if (value.status === 200) {
                dispatch(loginSuccess(value.data.user.user_name, value.data.token, value.msg));
                message.success({
                    content: "登录成功",
                    style: {
                        marginTop: '1vh',
                    }
                });
                navigate('/personal');
            }
            else {
                dispatch(loginFailure(completeMessage.current));
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
        message.error({
            content: "提交失败",
            style: {
                marginTop: '1vh',
            }
        });
    }
    return (
        <div className={styles.page}>
            <h1 style={{
                fontSize: "1.7rem",
                marginTop: "1rem",

            }}>登录</h1>
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
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>记住我</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16
                    }}
                >
                    <Button type="primary" htmlType="submit" disabled={loginWaiting}>
                        登录
                    </Button>
                    <Link to="/register">
                        <Button type="default" disabled={loginWaiting}>
                            注册
                        </Button>
                    </Link>
                    <Button type="dashed" onClick={test} disabled={loginWaiting}>
                        测试
                    </Button>

                </Form.Item>
            </Form>
        </div>
    );
}
export default LoginPage;