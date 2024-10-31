import Header from "./components/Header";
import "./App.css";
import { Outlet } from "react-router-dom";
import Banner from "./components/Banner";
import Scroll from "./components/Scroll";
const App = () => {
  return (
    <div className=""> 
    <Banner/>
    <Header />
    <Outlet />
    <Scroll/>
    </div>
    );
};

export default App;
