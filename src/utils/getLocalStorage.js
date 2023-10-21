function getLocalStorage(id) {
  return JSON.parse(localStorage.getItem(id));
}
export default getLocalStorage;