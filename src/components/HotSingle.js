import { Parallax } from 'rc-scroll-anim';
import styles from '../assets/styles/Single.module.css'
import { FireOutlined } from '@ant-design/icons';


function HotSingle({ goods, style }) {
    return (
        <Parallax animation={{
            y:0,opacity:1,playScale:[0.1,0.6],ease:"easeOutQuad"
        }} style={{
            transform:"translateY(3rem)",opacity:0
        }}>
            <div className={styles.bannerBottom} style={style}>
                <div className={styles.imageContainer}>
                    <img src={goods.image} alt={goods.name} style={{
                        maxHeight: "100%",
                        maxWidth: "100%"
                    }} />
                </div>
                <div className={styles.explain}>
                    <h1 className={styles.p1}>{goods.name}</h1>
                    <h2 className={styles.p2}>目前存量：{goods.currentInventory}</h2>
                </div>
                {goods.categories.includes("特卖") ?
                    <FireOutlined style={{
                        position: "absolute",
                        top: "0",
                        right: "0",
                        color: "red",
                        scale: "2"
                    }}
                    /> : null
                }
            </div>
        </Parallax>
    );
}

export default HotSingle;