import { useState } from "react"; 
import { Link } from "react-router-dom"; 
import arrow_right from "../assets/arrow_right.svg"; 

const Button = () => {
  const [isHovered, setIsHovered] = useState(false); 
  return (
    <div className="bg-customYellow mr-7 px-6"> 
      <Link
        className={`flex items-center py-2 font-semibold text-blue-700 transform transition-transform duration-200 ${isHovered ? 'scale-105' : 'scale-100' } hover:text-blue-700 whitespace-nowrap`} 
        to="/" 
        target="_blank"
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)} 
      >
        <span className="pr-2 font-bold text-sm font-montserrat text-center">
         Let's talk
        </span>
        <i className={`transition-opacity duration-100 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <img src={arrow_right} alt="Arrow" />
        </i>
      </Link>
    </div>
  );
};

export default Button;
