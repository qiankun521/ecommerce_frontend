import { Spin } from "antd";

function Waiting() {
    return (
        <div style={{
            width: "100%",
            height: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Spin size="large" delay={500} />
        </div>
    )
}
export default Waiting;