function saveLocalStorage(goods){
    goods.forEach((item)=>{
        localStorage.setItem(item.id,JSON.stringify(item))
    })
}
export default saveLocalStorage;