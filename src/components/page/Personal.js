import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { Button, message } from "antd";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/actions/loginRegisterAction";
import styles from "../../assets/styles/Personal.module.css";

function Personal() {
    const loginRegister = useSelector(state => state.loginRegister);
    const {logout,username,token}=loginRegister;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        if (logout) {
            navigate("/login");
            message.error("未登录，请先登录");
        }
    }, [logout, navigate]);
    function handleClick() {
        dispatch(logOut());
    }
    return (
        <div className={styles.personalContainer}>
            <div>用户名：{username}</div>
            <div style={{overflow:"hidden"}}>token：{token}</div>
            <Button onClick={handleClick}>退出登录</Button>
        </div>
    )
}
export default Personal;