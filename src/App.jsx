import Header from "./components/Header";
import "./App.css";
import { Outlet } from "react-router-dom";
import Banner from "./components/Banner";
const App = () => {
  return (
    <div className=""> 
    <div className="bg-services bg-cover bg-right bg-no-repeat">
    <Banner/>
    <Header />
    <Outlet />
    </div>
  
  </div>
  );
};

export default App;
