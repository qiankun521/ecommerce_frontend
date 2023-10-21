import styles from "../assets/styles/DeIncrease.module.css";

function DeIncrease({id,handelIncrease,handleDecrease,num,handleSetNum}) {
    return (
        <div className={styles.num}>
            <button className={styles.shopButton} onClick={handleDecrease}>-</button>
            <input className={styles.shopNum} type="text" name="charge number" value={num} onChange={handleSetNum} style={{
                boxSizing: "border-box",
                width: "1.5rem",
                height: "1.5rem",
                textAlign: "center",
                fontSize: "0.8rem",
                padding: "0",
                margin: "0", borderRadius: "0%",
                border: "0.5px solid rgb(0, 0, 0)"
            }} />
            <button className={styles.shopButton} onClick={handelIncrease}>+</button>
        </div>
    )
}
export default DeIncrease;