import React, { useState } from "react";
import Searchbar from "./Searchbar";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { AnimatePresence, motion } from "framer-motion";
import { useWishlist } from "../Context/WishlistContext";
import { RiUserLine } from "react-icons/ri";
import { useAuthContext } from "../Context/UserAuthContext";
import Button from "../shared/Button";
import { PiShoppingBagOpen } from "react-icons/pi";
import { MdOutlineCancel } from "react-icons/md";
import { HiOutlineStar } from "react-icons/hi";
import { RiLogoutBoxLine } from "react-icons/ri";
import { GrCart } from "react-icons/gr";
import { GoHeart } from "react-icons/go";

const ActionPanel: React.FC = () => {
  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.qty, 0);
  const [showDropdown, setShowDropdown] = useState(false);
  const { setisAuthenticated, isAuthenticated } = useAuthContext();
  return (
    <div className="flex flex-col justify-center items-center lg:justify-normal lg:flex-row gap-5">
      <Searchbar />

      <Link
        className="relative hover:-translate-y-1 mt-3 lg:mt-0 lg:text-black text-white duration-200 transition-all"
        to="/Wishlist"
      >
        <GoHeart size={28} />
        <AnimatePresence>
          {wishlistItems.length > 0 && (
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1.1 }}
              exit={{ scale: 0 }}
              className="rounded-full  absolute -top-3 right-0 left-5 bg-button2  text-white w-6 h-6  flex items-center justify-center"
            >
              {wishlistItems.length}
            </motion.h1>
          )}
        </AnimatePresence>
      </Link>
      <Link
        className="relative hover:-translate-y-1 lg:text-black text-white  duration-200 transition-all"
        to="/Cart"
      >
        <GrCart size={28} />
        <AnimatePresence>
          {totalQuantity > 0 && (
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1.1 }}
              exit={{ scale: 0 }}
              className="rounded-full  absolute -top-3 right-0 left-5 bg-button2  text-white w-6 h-6  flex items-center justify-center"
            >
              {totalQuantity}
            </motion.h1>
          )}
        </AnimatePresence>
      </Link>
      {isAuthenticated && (
        <div
          onClick={() => setShowDropdown(!showDropdown)}
          className="relative "
        >
          <Link
            className={`relative block border-black rounded-full p-[0.35rem] ${
              showDropdown ? "bg-button2 text-white" : ""
            } duration-200 transition-all relative block border-black rounded-full p-[0.35rem]
            hover:bg-button2 hover:text-white text-white' 
             `}
            to="/MyAccount/Profile"
          >
            <RiUserLine size={24} />
          </Link>
          <AnimatePresence>
            {showDropdown && (
              <div className="h-56 w-60 absolute left-1/2 sm:right-2 sm:left-auto transform -translate-x-1/2 sm:translate-x-0 bottom-16 sm:bottom-auto">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-full h-full bg-black border sm:bg-black gap-3 font-poppins  pl-5 pt-7 sm:bg-opacity-20 flex flex-col  rounded-md backdrop-blur-3xl -right-2 mt-6  absolute text-white "
                >
                  <div className="flex gap-4 hover:text-text2 transition-all duration-200">
                    <RiUserLine size={26} />
                    <Link to="/MyAccount/Profile">Manage My Account</Link>
                  </div>
                  <div className="flex gap-4 hover:text-text2 transition-all duration-200">
                    <PiShoppingBagOpen size={27} />
                    <Link to="/MyAccount/OrderHistory">My Order</Link>
                  </div>{" "}
                  <div className="flex gap-4 hover:text-text2 transition-all duration-200">
                    <MdOutlineCancel size={27} />
                    <Link to="/MyAccount/Profile">My Cancellations</Link>
                  </div>{" "}
                  <div className="flex gap-4 hover:text-text2 transition-all duration-200">
                    <HiOutlineStar size={27} />
                    <Link to="/MyAccount/Profile">My Reviews</Link>
                  </div>{" "}
                  <Button
                    onClick={() => setisAuthenticated(false)}
                    description=""
                    className="flex gap-4 hover:text-text2 transition-all duration-200"
                    icon=""
                  >
                    <span>
                      <RiLogoutBoxLine size={27} />
                    </span>
                    <span>Logout</span>
                  </Button>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default ActionPanel;
