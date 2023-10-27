import { useSelector} from "react-redux";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { message, Menu } from "antd";
import styles from "../../assets/styles/Personal.module.css";
import { Route, Routes } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router";
import Information from "../Information";
const items = [
    {
        key: "information",
        label: "个人信息",
    },
    {
        key: "order",
        label: "订单详情",
    },
    {
        key: "money",
        label: "我的余额",
    },
    {
        key: "secure",
        label: "账号安全",
    }
];


function Order() {
    return (
        <div>order</div>
    )
}
function Money() {
    return (
        <div>money</div>
    )
}
function Secure() {
    return (
        <div>secure</div>
    )
}
function Personal() {
    const loginRegister = useSelector(state => state.loginRegister);
    const personal = useSelector(state => state.personal);
    const { nickname, address, contact } = personal;
    const { logout, username } = loginRegister;
    const [selected, setSelected] = useState("information");
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        if (logout) {
            navigate("/login");
            message.error("未登录，请先登录");
        }
        else if (location.pathname === "/personal") {//默认跳转到个人信息
            navigate("/personal/information");//TODO 使用更方便简洁的方法
        }
    }, [location.pathname, logout, navigate]);
    function handleSelect(e) {
        setSelected(e.key);
        navigate(e.key);
    }

    return (
        <div className={styles.personalContainer}>
            <Menu className={styles.menu} mode="horizontal" selectedKeys={selected} items={items} onSelect={handleSelect}>
            </Menu>
            <Outlet />
            <Routes>
                <Route path="information" element={<Information username={username} nickname={nickname} address={address} contact={contact}></Information>}></Route>
                <Route path="order" element={<Order></Order>}></Route>
                <Route path="money" element={<Money></Money>}></Route>
                <Route path="secure" element={<Secure></Secure>}></Route>
            </Routes>
        </div>
    )
}
export default Personal;