import Page from "./Page";
import Waiting from "./Waiting";

function Livingroompage({goods,haveGoods}) {
  return (
    haveGoods ? (
      <Page title="客厅" goods={goods}></Page>
    )
      :
      <Waiting></Waiting>
  )
}
export default Livingroompage;