import React, { useState, useEffect } from "react";

const Scroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 1000) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {isVisible && (
        <a
          onClick={scrollToTop}
          className="scroll-top fixed bottom-4 right-4 p-3 text-blue-800 text-3xl bg-white rounded-full cursor-pointer h-12 w-12 pt-3 pl-4 hover:bg-customham transition duration-200"
        >
          ^
        </a>
      )}
    </>
  );
};

export default Scroll;
