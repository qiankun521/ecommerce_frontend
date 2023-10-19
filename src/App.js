import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mainpage from './components/Mainpage';
function App() {
  return (
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
          <Route path="/all">
            <All />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route> */}
          <Route path="/" element={<Mainpage></Mainpage>}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
