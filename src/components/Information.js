import { useDispatch } from "react-redux";
import { Button, message, Avatar, Modal, Form, Input } from "antd";
import { logOut } from "../redux/actions/loginRegisterAction";
import styles from "../assets/styles/Information.module.css";
import { useState } from "react";
import changeProfile from "../utils/changeProfile";
import { profileRequest, profileSuccess, profileFailure } from "../redux/actions/personalAction";
function Information({ username, address, contact, nickname }) {
    const [form] = Form.useForm();
    const [visible, setVisible] = useState(false);
    const [useable, setUseable] = useState(false);
    const dispatch = useDispatch();
    function handleQuitClick() {
        dispatch(logOut());
    }
    function handleChangeClick() {
        setVisible(true);
    }
    function handleCancel() {
        setVisible(false);
    }
    function handleFinish(values) {
        message.loading({
            content: "正在修改...",
            duration: 0
        })
        setUseable(true);
        dispatch(profileRequest(values.nickname, values.address, values.contact));
        changeProfile(values.username, values.address, values.contact).then((value) => {
            message.destroy();
            if (value.status === 200) {
                message.success({
                    content: "修改成功"
                })
                dispatch(profileSuccess(values.nickname, values.address, values.contact, value.msg));
                setUseable(false);
                setVisible(false);
            }
            else {
                message.error({
                    content: "修改失败"
                })
                dispatch(profileFailure(value.msg));
                setUseable(false);
            }
        })
    }
    return (
        <div className={styles.informationContainer}>
            <div className={styles.informationItem}>
                <div className={styles.describe}>用户头像：</div>
                <div className={styles.item}>
                    <Avatar
                        style={{
                            backgroundColor: "blue",
                            verticalAlign: 'middle',
                        }}
                        size="large"
                    >
                        {nickname}
                    </Avatar>
                </div>
            </div>
            <div className={styles.informationItem}>
                <div className={styles.describe}>用户账号：</div>
                <div className={styles.item}>{username}</div>
            </div>
            <div className={styles.informationItem}>
                <div className={styles.describe}>用户昵称：</div>
                <div className={styles.item}>{nickname}</div>
            </div>
            <div className={styles.informationItem}>
                <div className={styles.describe}>收货地址：</div>
                <div className={styles.item}>{address}</div>
            </div>
            <div className={styles.informationItem}>
                <div className={styles.describe}>联系方式：</div>
                <div className={styles.item}>{contact}</div>
            </div>
            <div className={styles.informationItem} id={styles.buttonContainer}>
                <Button onClick={handleQuitClick} id={styles.button1}>退出登录</Button>
                <Button onClick={handleChangeClick} id={styles.button2} type="primary">修改信息</Button>
            </div>
            <Modal open={visible} onCancel={handleCancel} forceRender footer="" >
                <div>修改信息</div>
                <Form form={form} onFinish={handleFinish}>
                    <Form.Item label="用户昵称" name="nickname" rules={
                        [
                            {
                                min: 3,
                                message: "请至少输入三个字符"
                            },
                            {
                                max: 10,
                                message: "最多输入十个字符"
                            },
                            {
                                required: true,
                                message: '请输入昵称'
                            }
                        ]
                    }>
                        <Input value={nickname}></Input>
                    </Form.Item>
                    <Form.Item label="收货地址" name="address" rules={
                        [
                            {
                                min: 3,
                                message: "请至少输入三个字符"
                            },
                            {
                                max: 10,
                                message: "最多输入十个字符"
                            },
                            {
                                required: true,
                                message: '请输入收货地址'
                            }
                        ]
                    }>
                        <Input value={address}></Input>
                    </Form.Item>
                    <Form.Item label="联系方式" name="contact" rules={
                        [
                            {
                                min: 3,
                                message: "请至少输入三个字符"
                            },
                            {
                                max: 10,
                                message: "最多输入十个字符"
                            },
                            {
                                required: true,
                                message: '请输入联系方式'
                            }
                        ]
                    }>
                        <Input value={contact}></Input>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" disabled={useable}>修改</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}

export default Information;