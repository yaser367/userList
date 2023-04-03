import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import Logo from "../../assets/react.svg";

import "./Navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/auth";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const auth = useAuth();
  const Navigate = useNavigate();
  const handleLogout = () => {
    Navigate("/login");
    auth.logout(false);
  };
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img className="logo" src={Logo} alt="Logo" />
      </div>
      <ul className="app__navbar-links">
        <li>
          <Link to="/home">
            <a onClick={() => setToggle(false)}>Home</a>
          </Link>
        </li>
        <li>
          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              <li>
                <Link to="/home">
                  <a onClick={() => setToggle(false)}>Home</a>
                </Link>
              </li>
              <li>
                <button type="button" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
