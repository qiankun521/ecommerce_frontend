import Page from "./Page";
import Waiting from "./Waiting";

function All({goods,haveGoods}) {
  return (
    haveGoods ? (
      <Page keyword="全部" title="全部" goods={goods}></Page>
    )
      :
      <Waiting></Waiting>
  )
}
export default All;