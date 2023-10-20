function MainTitle({ t1, t2 }) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "1rem",
            marginBottom: "1rem",
        
        }}>
            <h1 style={{
                fontSize: "2rem",
                fontWeight: "bold",
                marginBottom: "0.5rem",
            
            }}>{t1}</h1>
            <h2 style={{
                fontSize: "1rem",
                marginBottom: "0.5rem",
            }}>{t2}</h2>
        </div>

    );
}
export default MainTitle;