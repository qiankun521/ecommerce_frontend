import { Carousel, Image, Button } from "antd";
import { Link } from "react-router-dom";
import styles from '../assets/styles/Banner.module.css'

export default function Banner({ goods }) {
    const bannerGoods = goods.filter((item) => item.categories.includes("首页"));
    return (
        <div className={styles.bannerContainer}>
            <Carousel autoplay effect="fade" className={styles.carousel}>
                {bannerGoods.map((item) => {
                    return (
                        <div key={item.id}>
                            <div className={styles.banner}>
                                <div className={styles.describe}>
                                    <p className={styles.t1}>2023新款</p>
                                    <p className={styles.t2}>{item.name}</p>
                                    <p className={styles.t3}>仅需￥{item.price}</p>
                                    <Link to={`/all/${item.id}`}><Button className={styles.bannerButton} type="default" size="large" ghost="trye" >立即购买</Button></Link>
                                </div>
                                <div className={styles.circle}>
                                    <Image alt={item.name} src={item.image} style={{ scale: "2" }} />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Carousel>
        </div>

    );
}