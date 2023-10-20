import { Link } from 'react-router-dom';
import HotSingle from './HotSingle';
import styles from '../assets/styles/Hot.module.css';

function Hot({ goods }) {
    const hotGoods = goods.filter((item) => item.categories.includes("热销"));
    return (
        <div className={styles.hotContainer}>
            {hotGoods.map((item) => {
                return (
                    <Link key={item.id} to={`/all/${item.id}`} style={{
                        textDecoration: "none"
                    }}>
                        <HotSingle goods={item} style={{
                            width: "100%",
                            height: "20vw"
                        }}></HotSingle>
                    </Link>
                )
            })}
        </div>
    );
}
export default Hot;