import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mainpage from './components/page/Mainpage';
import getGoods from "./utils/getgoods";
import saveLocalStorage from './utils/saveLocalStorage';
import Footer from './components/Footer';
import ID from './components/ID';
import store from './redux/store';
import { Provider } from 'react-redux';
import Cartpage from './components/page/Cartpage';
import Newpage from './components/page/Newpage';
import Livingroompage from './components/page/Livingroompage';
import Hotpage from './components/page/Hotpage';
import Sofapage from './components/page/Sofapage';
import Chairpage from './components/page/Chairpage';
import All from './components/All';
import Personal from './components/page/Personal';
import LoginPage from './components/page/LoginPage';
import RegisterPage from './components/page/RegisterPage';

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
            <Route path='/register' element={<RegisterPage></RegisterPage>}>
            </Route>
            <Route path='/login' element={<LoginPage></LoginPage>}>
            </Route>
            <Route path='/personal' element={<Personal></Personal>}>
            </Route>
            <Route path='/all' element={<All goods={goods} haveGoods={haveGoods}></All>}>
            </Route>
            <Route path='/chair' element={<Chairpage goods={goods} haveGoods={haveGoods}></Chairpage>}>
            </Route>
            <Route path='/sofa' element={<Sofapage goods={goods} haveGoods={haveGoods}></Sofapage>}>
            </Route>
            <Route path='/onsale' element={<Hotpage goods={goods} haveGoods={haveGoods}></Hotpage>}>
            </Route>
            <Route path='/livingroom' element={<Livingroompage goods={goods} haveGoods={haveGoods}></Livingroompage>}>
            </Route>
            <Route path="/new" element={<Newpage goods={goods} haveGoods={haveGoods}></Newpage>}>
            </Route>
            <Route path="/cart" element={<Cartpage></Cartpage>}>
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
