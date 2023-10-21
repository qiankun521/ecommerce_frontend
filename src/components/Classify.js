import styles from '../assets/styles/Classify.module.css'
import { Link } from 'react-router-dom';
import { Parallax } from 'rc-scroll-anim';

function Classify({ goods }) {
  const classifyGoods = goods.filter((item) => item.categories.includes("分类"));
  return (
    <div className={styles.classifyContainer}>
      {classifyGoods.map((item) => {
        return (
          <Parallax key={item.id} animation={{
            y: 0, opacity: 1, playScale: [0.1, 0.6], ease: "easeOutQuad"
          }} style={{
            transform: "translateY(2rem)", opacity: 0
          }}>
            <Link to={item.fensrc} style={{ textDecoration: "none" }}>
              {/* //TODO 做自适应适配，当前组件只能解决两种类别 */}
              <div className={styles.bannerBottom}>
                <div className={styles.imageContainer}>
                  <img src={item.image} alt={item.name} style={{
                    height: "100%",
                    weight: "auto"
                  }} />
                </div>
                <div className={styles.explain}>
                  <h1 className={styles.p1}>{item.categories.includes('沙发') ? "沙发" : "椅子"}</h1>
                </div>
              </div>
            </Link>
          </Parallax>
        )
      })}
    </div>
  );
}

export default Classify;