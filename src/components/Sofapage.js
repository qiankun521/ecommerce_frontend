import Page from "./Page";
import Waiting from "./Waiting";

function Sofapage({goods,haveGoods}) {
  return (
    haveGoods ? (
      <Page title="沙发" goods={goods}></Page>
    )
      :
      <Waiting></Waiting>
  )
}
export default Sofapage;