import Banner from "./Banner";
import getGoods from "../utils/getgoods";
import { useEffect, useState } from "react";
import Waiting from "./Waiting";
import BannerBottom from "./BannerBottom";
import MainTitle from "./MainTitle";
import Hot from "./Hot";

function Mainpage() {
  const [haveGoods, setHaveGoods] = useState(false);
  const [goods, setGoods] = useState([]);
  useEffect(() => {
    async function checkInventory() {
      const response = await getGoods();
      const inventory = await response.json();
      if (inventory.length) {
        setHaveGoods(true);
        setGoods(inventory);
      }
    }
    if (!haveGoods) {
      checkInventory();
    }
  }, [haveGoods])
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
    }}>
      {haveGoods ? (
        <>
          <Banner goods={goods}></Banner>
          <BannerBottom goods={goods}></BannerBottom>
          <MainTitle t1="热销中" t2="为你的房间增添最后的完美之笔"></MainTitle>
          <Hot goods={goods}></Hot>
          <MainTitle t1="产品分类" t2="找到最称心如意的家具"></MainTitle>
        </>
      )
        :
        <Waiting></Waiting>
      }
    </div>
  );
}
export default Mainpage;