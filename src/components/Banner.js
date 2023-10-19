import { Carousel } from "antd";
import { Link } from "react-router-dom";
import { BrowserRouter, Router } from "react-router-dom";
import '../assets/styles/Banner.css'
import getGoods from "../utils/getgoods";
import { useEffect, useState } from "react";

export default function Banner() {
    const [haveGoods, setHaveGoods] = useState(false);
    const [goods, setGoods] = useState([]);
    useEffect(()=>{
        async function checkInventory() {
            const response=await getGoods();
            const inventory=await response.json();
            if(inventory.length){
                setHaveGoods(true);
                setGoods(inventory);
                
            }
        }
        if(!haveGoods){
            checkInventory();
        }
    },[haveGoods])
    return (
        <div className="bannerContainer">
            <Carousel autoplay>
                {goods.filter((item) => item.categories.includes("首页"))
                        .map((item) => {
                            return (
                                <div className="banner" key={item.id}>
                                    <div className="title">{item.name}</div>
                                    <div className="circle"></div>
                                </div>
                            );
                        })}
            </Carousel>
        </div>
    );
}