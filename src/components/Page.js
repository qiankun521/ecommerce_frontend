import { Link } from 'react-router-dom';
import styles from '../assets/styles/Page.module.css';

function Page({ title, goods }) {
    const items = goods.filter((item) => {
        if(title==="全部")return true;
        else return item.categories.includes(title);
    });
    return (
        <div className={styles.page}>
            <h1 style={{
                fontSize: "1.7rem",
                marginTop: "1rem",
                marginLeft: "15vw"
            }}>{title}</h1>
            <div className={styles.pageContent}>
                {items.map((item) => {
                    return (
                        <Link to={`/all/${item.id}`} key={item.id} style={{textDecoration:"none",color:"black"}}>
                        <div className={styles.pageItem}>
                            <div className={styles.imageContainer}>
                                <img src={item.image} alt={item.name} style={{
                                    height: "100%",
                                    width: "100%",
                                    objectFit: "contain"
                                }} />
                            </div>
                            <div className={styles.explain}>
                                <h1 className={styles.p1}>{item.name}</h1>
                                <h2 className={styles.p2}>目前存量：{item.currentInventory}</h2>
                            </div>
                        </div>
                        </Link>
                    )
                })}
            </div>
        </div>

    );
}
export default Page;