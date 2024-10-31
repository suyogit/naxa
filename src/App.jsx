import Header from "./components/Header";
import "./App.css";
import { Outlet } from "react-router-dom";
import Banner from "./components/Banner";
const App = () => {
  return (
    <div className=""> 
    <Banner/>
    <Header />
    <Outlet />
    </div>
    );
};

export default App;
