import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { logOut} from "../redux/actions/loginRegisterAction";

function Personal() {
    const loginRegister = useSelector(state=>state.loginRegister);
    const {logout,username,token} = loginRegister;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(()=>{
        setTimeout(()=>{
            if(logout)navigate('/login');
        },2000);
    },[logout,navigate])
    function handleClick(){
        dispatch(logOut());
    }
    if(!logout){
        return (
            <div>
                <div>用户名：{username}</div>
                <div>token：{token}</div>
                <Button onClick={handleClick}>退出登录</Button>
            </div>
        )
    }
    else{
        return (
            <div style={{
                height:"50vh",
                width:"100%",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
            }}>未登录，正在跳转到登录界面...</div>
        );
    }
}
export default Personal;