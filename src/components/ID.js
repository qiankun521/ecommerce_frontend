import getLocalStorage from "../utils/getLocalStorage";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import styles from "../assets/styles/ID.module.css";
import { useState } from "react";
import { Button, message } from "antd";
import { addToCart } from "../redux/actions/cartActions";
import { useDispatch } from "react-redux";
import DeIncrease from "./DeIncrease";
function ID() {
    const { id } = useParams();
    const good = getLocalStorage(id);
    const [num, setNum] = useState(1);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    function handleDecrease() {
        if (num > 1) {
            setNum(num - 1);
        }
    }
    function handelIncrease() {
        if (num !== "") setNum(parseInt(num) + 1);
        else setNum(1);
    }
    function handleSetNum(e) {
        setNum(e.target.value);
    }
    function add() {
        if (num !== "" && parseInt(num) > 0) {
            dispatch(addToCart(good.id, num));
            message.success({
                content: '添加购物车成功',
                style: {
                    marginTop: '1vh',
                },
                onClick: () => {
                    navigate("/cart");
                }
            })
        }
        else{
            message.error({
                content: '请输入合法的购买数量',
                style: {
                    marginTop: '1vh',
                }
            })
        }
    }
    return (
        <div className={styles.IDcontainer}>
            <div className={styles.imgContainer}>
                <img src={good.image} alt={good.name} style={{
                    maxWidth: "100%",
                    maxHeight: "100%"
                }} />
            </div>
            <div className={styles.describe}>
                <div style={{
                    fontSize: "2rem",
                    fontWeight: "bold",
                    marginTop: "3rem",
                    display: "flex",
                    justifyContent: "center"
                }}>{good.name}</div>
                <div style={{
                    fontSize: "1.5rem",
                }}>￥{good.price}</div>
                <div style={{
                    fontSize: "0.7rem",
                }}>{good.description}</div>
                <div className={styles.shopContainer}>
                    <div className={styles.shop}>
                        <div style={{
                            margin: "0", padding: "0", marginRight: "2rem", alignItems: "center", width: "40%"
                        }}>购买数量</div>
                        <DeIncrease id={id} handelIncrease={handelIncrease} handleDecrease={handleDecrease} num={num} handleSetNum={handleSetNum} />
                    </div>

                </div>
                <Button style={{
                    marginTop: "1rem", width: "100%"
                }} onClick={add}>添加到购物车</Button>
            </div>
        </div>
    )
}

export default ID;