import { Space } from "antd";
import { Link } from "react-router-dom";
import { BrowserRouter, Router } from "react-router-dom";
import '../assets/styles/Header.css'
import logo from '../logo.svg';
import { ShoppingCartOutlined } from '@ant-design/icons';
export default function Header() {
    return (
        <div className="navContainer">
            <Space direction="horizontal" size="large" align="left" className="nav">
                <img src={logo} width={50} alt="" />
                <Link to="/" className="link">首页</Link>
                <Link to="/new" className="link">最近上新</Link>
                <Link to="/sofa" className="link">沙发</Link>
                <Link to="/livingroom" className="link">客厅好物</Link>
                <Link to="/onsale" className="link">热销</Link>
                <Link to="/chair" className="link">椅子</Link>
                <Link to="/all" className="link">总览</Link>
            </Space>
            <div className="cartContainer">
                <Link to="/cart" className="link"><ShoppingCartOutlined className="cart"/></Link>
            </div>
        </div>
    );
}