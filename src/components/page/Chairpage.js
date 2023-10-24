import Page from "../Page";
import Waiting from "../Waiting";

function Chairpage({goods,haveGoods}) {
  return (
    haveGoods ? (
      <Page title="椅子" goods={goods}></Page>
    )
      :
      <Waiting></Waiting>
  )
}
export default Chairpage;