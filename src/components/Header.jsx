import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
const Header = () => {
  return (
    <div>
      <nav>
        <div className="flex items-center justify-between max-w-[1380px] mx-auto">
          <div className="ml-24">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="" />
              <h2 className="ml-2 mr-2 text-lg font-bold">naxa</h2>
            </Link>
          </div>
          <div className="flex items-center justify-between">
            <Link to="/">
              <h2 className="ml-2 mr-2 text-lg px-4">Services</h2>
            </Link>
            <Link to="/">
              <h2 className="ml-2 mr-2 text-lg px-4">Portfolio</h2>
            </Link>
            <Link to="/">
              <h2 className="ml-2 mr-2 text-lg px-4">Company</h2>
            </Link>
            <Link to="/">
              <h2 className="ml-2 mr-2 text-lg px-4">GeoAI</h2>
            </Link>
            <Link to="/">
              <h2 className="ml-2 mr-2 text-lg px-4">Events & Media</h2>
            </Link>
            <Link to="/">
              <h2 className="ml-2 mr-2 text-lg px-4">Blogs</h2>
            </Link>
          </div>
          <div className="mr-24 bg-customYellow ">
            <button className="bg-customYellow px-6 py-2"> Let&apos;s talk</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
