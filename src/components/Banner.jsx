import { Link } from "react-router-dom";
import { useState } from "react"; 
import arrow_right from "../assets/arrow_right.svg";

const Banner = () => {
  const [isHovered, setIsHovered] = useState(false); 

  return (
    <div className="flex justify-center bg-customYellow underline py-2">
      <Link
        className={`flex items-center transform transition-transform duration-100 ${isHovered ? 'scale-105' : 'scale-100'} hover:text-blue-700`} 
        target="_blank"
        to="/blog/unified-action-naxa-nepal-flying-labs-and-partners-respond-to-the-western-nepal-earthquake-2023-28"
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)} 
      >
        <span className="pr-2 font-bold text-sm font-montserrat  text-center">
          We Have Been Working On Several Initiatives During The
          Jajarkot-Rukum Earthquake Response 2023. Check Them Out
        </span>
        <i className={` transition-opacity duration-100 ${isHovered ? 'opacity-100' : 'opacity-0'} `}>
          <img src={arrow_right} alt="Arrow" />
        </i>
      </Link>
    </div>
  );
};

export default Banner;
