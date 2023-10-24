import { useSelector } from "react-redux";
import getLocalStorage from "../utils/getLocalStorage";
import styles from "../assets/styles/CartPage.module.css";
import DeIncrease from "./DeIncrease";
import { setTo, decrease, increase, removeFromCart, clearCart } from "../redux/actions/cartActions";
import { useDispatch } from "react-redux";
import { CloseCircleOutlined } from '@ant-design/icons';
import { Button } from "antd";
import QueueAnim from "rc-queue-anim";
import message from "antd/lib/message";

function Cartpage() {
    const itemOb = useSelector(state => state.cart);
    const item = Object.entries(itemOb);
    const dispatch = useDispatch();
    item.forEach((element) => {
        if(!element||element[0]==="cartTotal")return;
        const tmp = element[1];
        element[1] = {};
        element[1].num = tmp;
        const good = getLocalStorage(element[0]);
        element[1].name = good.name;
        element[1].price = good.price;
        element[1].image = good.image;
    });
    let sum = 0;
    function handleClear() {
        dispatch(clearCart());
        message.success({
            content: '清空购物车成功',
                style: {
                    marginTop: '1vh',
                }
        });
    }
    return (
        <div>
            <h1 style={{
                fontSize: "1.7rem",
                marginTop: "1rem",
                marginLeft: "15vw"

            }}>你的购物车</h1>
            <div className={styles.cartContainer} style={{
                position: "relative"
            }}>
                <QueueAnim >
                {item.length > 1 ? item.map(ele => {
                    if(ele[0]==="cartTotal")return null;
                    sum += ele[1].num * ele[1].price;
                    function handleDecrease() {
                        dispatch(decrease(ele[0]));
                    }
                    function handelIncrease() {
                        dispatch(increase(ele[0]));
                    }
                    function handleSetNum(e) {
                        dispatch(setTo(ele[0], e.target.value));
                    }
                    function handleDelete() {
                        dispatch(removeFromCart(ele[0]));
                    }
                    return (
                        <div className={styles.cartItem} key={ele[0]}>
                            <div className={styles.imgContainer}>
                                <img src={ele[1].image} alt={ele[1].name} style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain"
                                }} />
                            </div>
                            <div className={styles.describe}>
                                <div style={{
                                    fontSize: "1.2rem",
                                    fontWeight: "bold",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "100%"
                                }}>{ele[1].name}</div>
                                <div style={{
                                    fontSize: "1rem",
                                }}>数量：</div>
                                <DeIncrease id={ele[0]} handleDecrease={handleDecrease} handelIncrease={handelIncrease} handleSetNum={handleSetNum} num={ele[1].num}></DeIncrease>
                                <div style={{
                                    fontSize: "1rem",
                                }}>单价：￥{ele[1].price}</div>
                                <div style={{
                                    fontSize: "1rem",
                                }}>总价：￥{ele[1].num * ele[1].price}</div>
                                <CloseCircleOutlined className={styles.delete} style={{
                                    color: "red",
                                    fontSize: "1.5rem"
                                }} onClick={handleDelete} />
                            </div>


                        </div>
                    )

                })
                    : <div style={{
                        fontSize: "1.2rem",
                        marginTop: "1rem",
                        marginBottom: "1rem",
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "10vw",

                    }}>你的购物车空空如也</div>
                }
                </QueueAnim>
                <div className={styles.cartBottom}>
                    <Button type="primary">去付款</Button>
                    <Button onClick={handleClear}>清空购物车</Button>
                    <div>总计：{sum}元</div>
                </div>



            </div>
        </div>
    )
}
export default Cartpage;