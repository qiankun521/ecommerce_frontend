import Page from "../Page";
import Waiting from "../Waiting";

function Hotpage({goods,haveGoods}) {
  return (
    haveGoods ? (
      <Page title="热销" goods={goods}></Page>
    )
      :
      <Waiting></Waiting>
  )
}
export default Hotpage;