import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mainpage from './components/Mainpage';
import getGoods from "./utils/getgoods";
import saveLocalStorage from './utils/saveLocalStorage';
import Footer from './components/Footer';
import ID from './components/ID';
import store from './redux/store';
import { Provider } from 'react-redux';
import CartPage from './components/CartPage';

function App() {
  const [haveGoods, setHaveGoods] = useState(false);
  const [goods, setGoods] = useState([]);
  useEffect(() => {
    async function checkInventory() {
      const response = await getGoods();
      const inventory = await response.json();
      if (inventory.length) {
        setHaveGoods(true);
        setGoods(inventory);
        saveLocalStorage(inventory);
      }
    }
    if (!haveGoods) {
      checkInventory();
    }
  }, [haveGoods])

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header>
          </Header>
          <Routes>
            {/* <Route path="/new">
            <New />
          </Route>
          <Route path="/sofa">
            <Sofa />
          </Route>
          <Route path="/livingroom">
            <Livingroom />
          </Route>
          <Route path="/onsale">
            <Onsale />
          </Route>
          <Route path="/chair">
            <Chair />
          </Route>
          
           */}
          <Route path="/cart" element={<CartPage></CartPage>}>
          </Route>
            <Route path="/all/:id" element={<ID></ID>}>
            </Route>
            <Route path="/" element={<Mainpage goods={goods} haveGoods={haveGoods}></Mainpage>}>
            </Route>
          </Routes>
          <Footer></Footer>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
