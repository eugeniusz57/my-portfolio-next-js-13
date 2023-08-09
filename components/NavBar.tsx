"use client"; // this is a client component
import React from "react";
import { useState } from "react";
import { Link } from "react-scroll/modules";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { navItems } from "@/data/navItems";

const NavBar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [isOpenNavBar, setIsOpenNavBar] = useState(false);

  return (
    <header className="w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className="justify-between md:items-center md:flex ">
        <div>
          <div className="flex items-center justify-between   md:block">
            <Link
              to="home"
              className="cursor-pointer"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <div className="container flex items-center space-x-2">
                <h2 className="text-2xl font-bold hover:text-gray-700 py-5">
                  Yevhenii Kavetskyi
                </h2>
              </div>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setIsOpenNavBar(!isOpenNavBar)}
              >
                {isOpenNavBar ? (
                  <IoMdClose size={30} />
                ) : (
                  <IoMdMenu size={30} />
                )}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center  mt-8 md:block md:pb-0 md:mt-0 ${
              isOpenNavBar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {navItems.map(({ label, page, id }) => {
                return (
                  <Link
                    key={id}
                    to={page}
                    className={
                      "block lg:inline-block text-neutral-900 py-5 hover:text-neutral-500 dark:text-neutral-100 cursor-pointer"
                    }
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setIsOpenNavBar(!isOpenNavBar)}
                  >
                    {label}
                  </Link>
                );
              })}
              {currentTheme === "dark" ? (
                <button
                  onClick={() => setTheme("light")}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiSunLine size={25} color="black" />
                </button>
              ) : (
                <button
                  onClick={() => setTheme("dark")}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiMoonFill size={25} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
