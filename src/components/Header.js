import { Link } from "react-router-dom";
import styles from '../assets/styles/Header.module.css'
import logo from '../logo.svg';
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Badge } from "antd";
import { useSelector } from "react-redux";

function Header() {
    const cartTotal = useSelector(state => state.cart.cartTotal);
    return (
        <div className={styles.navContainer}>
            <div className={styles.nav}>
                <img src={logo} alt="logo" style={{ width: "3rem" }} />
                <Link to="/" className={styles.link}>首页</Link>
                <Link to="/new" className={styles.link}>最近上新</Link>
                <Link to="/livingroom" className={styles.link}>客厅好物</Link>
                <Link to="/onsale" className={styles.link}>热销</Link>
                <Link to="/sofa" className={styles.link}>沙发</Link>
                <Link to="/chair" className={styles.link}>椅子</Link>
                <Link to="/all" className={styles.link}>总览</Link>
            </div>
            <div className={styles.cartContainer}>
                <Link to="/personal" className={styles.link}>
                <UserOutlined className={styles.cart} />
                </Link>
                <Link to="/cart" className={styles.link}>
                    <Badge count={cartTotal}>
                        <ShoppingCartOutlined className={styles.cart} />
                    </Badge>
                </Link>
            </div>
        </div>

    );
}
export default Header;