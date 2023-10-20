import { Link } from 'react-router-dom';
import styles from '../assets/styles/BannerBottom.module.css'

function BannerBottom({ goods }) {
    const bottomGoods = goods.filter((item) => item.categories.includes("展示"));
    console.log(bottomGoods);
    return (
        <div className={styles.bannerBottomContainer}>
            {bottomGoods.map((item) => {
                return (
                    <Link key={item.id} to={item.zhansrc} style={{ textDecoration: "none" }}>
                        <div className={styles.bannerBottom}>
                            <div className={styles.imageContainer}>
                                <img src={item.image} alt={item.name} style={{
                                    height: "100%",
                                    weight: "auto"
                                }} />
                            </div>
                            <div className={styles.explain}>
                                <h1 className={styles.p1}>{item.zhan}</h1>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>

    )
}
export default BannerBottom;
