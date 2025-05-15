import React from "react";
import { useSelector } from "react-redux";
import styles from "./Header.module.css";
import { Link } from "react-router";
import { IoSearchSharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaCartArrowDown } from "react-icons/fa";

const Header = () => {
  const basketCount = useSelector((state) => state.products.basketCount); // Get the basket count from Redux

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img
            src="https://preview.colorlib.com/theme/aranoz/img/logo.png"
            alt="Logo"
          />
        </div>
        <div className={styles.nav}>
          <Link to={"/"} className={styles.link}>
            Home
          </Link>
          <Link to={"/admin"} className={styles.link}>
            Admin
          </Link>
          <div className={styles.baskettt}>
            
            <Link to={"/basket"} className={styles.link2}>
              Basket
            </Link>
            <span className={styles.basketCount}>{basketCount}</span>
          </div>
          <Link to={"/wish"} className={styles.link}>
            Wish
          </Link>
          <Link className={styles.link}>Contact</Link>
        </div>
        <div className={styles.icons}>
          <IoSearchSharp className={styles.navicon} />
          <CiHeart className={styles.navicon} />
          <FaCartArrowDown className={styles.navicon} />
          {/* Display basket count */}
        </div>
      </div>
    </div>
  );
};

export default Header;
