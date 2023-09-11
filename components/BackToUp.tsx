"use client";

import { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa6";
import { Link } from "react-scroll";

const BackToUp = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 400 ? setIsActive(true) : setIsActive(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  console.log(isActive);

  return (
    <Link
      to="home"
      smooth={true}
      className={`${
        !isActive && "hidden"
      } fixed bg-accent hover:bg-accent-hover w-12 h-12 right-16 bottom-11 z-10 cursor-pointer flex justify-center items-center text-white border-2 border-white`}
    >
      <FaChevronUp className="text-xl" />
    </Link>
  );
};

export default BackToUp;
