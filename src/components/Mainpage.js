import Banner from "./Banner";
import Waiting from "./Waiting";
import BannerBottom from "./BannerBottom";
import MainTitle from "./MainTitle";
import Hot from "./Hot";
import Classify from "./Classify";

function Mainpage({goods,haveGoods}) {
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
          <Classify goods={goods}></Classify>
        </>
      )
        :
        <Waiting></Waiting>
      }
    </div>
  );
}
export default Mainpage;