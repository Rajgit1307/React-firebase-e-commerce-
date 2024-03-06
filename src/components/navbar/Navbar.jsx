import React, { Fragment, useContext, useState } from "react";
import mycontext from "../../context/data/MyContext";
import { Link } from "react-router-dom";
import { BsFillCloudSunFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { Dialog, Transition } from "@headlessui/react";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";

function Navbar() {
  const { toggleMode, mode } = useContext(mycontext);
  const [open, setOpen] = useState(false);

  const cartItems = useSelector((state)=>state.cart);
  // console.log(cartItems);


  const user = JSON.parse(localStorage.getItem("user"));
  // console.log(user);

  const logout = () => {
    localStorage.clear("user");
    window.location.href = "/login";
  };

  return (
    <div className="bg-white sticky top-0 z-50 ">
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel
                className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(40, 44, 52)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <div className="flex px-4 pb-2 pt-28">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <RxCross2 />
                  </button>
                </div>
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <Link
                    to={"/allproducts"}
                    className="text-sm font-medium text-gray-900 "
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    All Products
                  </Link>
                  <div className="flow-root">
                    <Link
                      to={"/order"}
                      style={{ color: mode === "dark" ? "white" : "" }}
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Order
                    </Link>
                  </div>

                  {user?.user?.email === "rajsingh@gmail.com" ? (
                    <div className="flow-root">
                      <Link
                        to={"/dashboard"}
                        className="-m-2 block p-2 font-medium text-gray-900"
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        admin
                      </Link>
                    </div>
                  ) : (
                    ""
                  )}

                  {user ? (
                    <div className="flow-root">
                      <a
                        onClick={logout}
                        className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer"
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        Logout
                      </a>
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="flow-root">
                    <Link
                      to={"/"}
                      className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer"
                    >
                      <img
                        className="inline-block w-10 h-10 rounded-full"
                        src="https://www.flaticon.com/free-icon/user_219970?term=profile+picture&page=1&position=23&origin=tag&related_id=219970.png"
                        alt="Dan_Abromov"
                      />{" "}
                    </Link>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="img/indiaflag.png"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span
                      className="ml-3 block text-base font-medium text-gray-900"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      INDIA
                    </span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Desktop */}
      <header className="relative bg-white">
        <p
          className="flex h-10 items-center justify-center bg-pink-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8"
          style={{
            backgroundColor: mode === "dark" ? "rgb(62 64 66)" : "",
            color: mode === "dark" ? "white" : "",
          }}
        >
          Get free delivery on orders over ₹300
        </p>

        <nav
          aria-label="Top"
          className="bg-gray-100 px-4 sm:px-6 lg:px-8 shadow-xl "
          style={{
            backgroundColor: mode === "dark" ? "#282c34" : "",
            color: mode === "dark" ? "white" : "",
          }}
        >
          <div className="">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
                style={{
                  backgroundColor: mode === "dark" ? "rgb(80 82 87)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <span className="sr-only">Open menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to={"/"} className="flex">
                  <div className="flex ">
                    <h1
                      className=" text-2xl font-bold text-black  px-2 py-1 rounded"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      E-Bharat
                    </h1>
                  </div>
                </Link>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <Link
                    to={"/allproducts"}
                    className="text-sm font-medium text-gray-700 "
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    All Products
                  </Link>
                  <Link
                    to={"/order"}
                    className="text-sm font-medium text-gray-700 "
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    Order
                  </Link>

                  {user?.user?.email === "rajsingh@gmail.com" ? (
                    <Link
                      to={"/dashboard"}
                      className="text-sm font-medium text-gray-700 "
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Admin
                    </Link>
                  ) : (
                    ""
                  )}

                  {user ? (
                    <a
                      onClick={logout}
                      className="text-sm font-medium text-gray-700 cursor-pointer  "
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Logout
                    </a>
                  ) : (
                    ""
                  )}
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 ">
                    <img
                      src="https://ecommerce-sk.vercel.app/img/indiaflag.png"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span
                      className="ml-3 block text-sm font-medium"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      INDIA
                    </span>
                  </a>
                </div>
                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 ">
                    <img
                      className="inline-block w-10 h-10 rounded-full"
                      src="data:image/jpeg;base64,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"
                      alt="Dan_Abromov"
                    />
                  </a>
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <button className="" onClick={toggleMode}>
                    {/* <MdDarkMode size={35} style={{ color: mode === 'dark' ? 'white' : '' }} /> */}
                    {mode === "light" ? (
                      <FiSun className="" size={30} />
                    ) : "dark" ? (
                      <BsFillCloudSunFill size={30} />
                    ) : (
                      ""
                    )}
                  </button>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link
                    to={"/cart"}
                    className="group -m-2 flex items-center p-2"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>

                    <span
                      className="ml-2 text-sm font-medium text-gray-700 group-"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                     {cartItems.length}
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
