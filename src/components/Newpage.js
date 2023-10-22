import Page from "./Page";
import Waiting from "./Waiting";

function Newpage({goods,haveGoods}) {
  return (
    haveGoods ? (
      <Page title="新品上市" goods={goods}></Page>
    )
      :
      <Waiting></Waiting>
  )
}
export default Newpage;