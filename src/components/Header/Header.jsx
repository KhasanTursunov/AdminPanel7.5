import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../../App.scss'

import LOGO from "../../assets/svg/logo.svg";
import N1 from "../../assets/svg/n1.svg";
import N2 from "../../assets/svg/n2.svg";
import N3 from "../../assets/svg/n3.svg";

const Header = () => {
	return (
    <>
      <div className="container">
        <div className="navbar">
          <div className="navbar_img">
              <NavLink to={"/"}>
              <img src={LOGO} alt="" />
               </NavLink>
          </div>

          <div className="navbar_links">
            <ul className="links">
              <NavLink to={"/"}>Главная </NavLink>
              <NavLink to={""}>Авто</NavLink>
              <NavLink to={""}>О нас</NavLink>
              <NavLink to={""}>Контакты</NavLink>
              <NavLink to={""}>Логин </NavLink>
              <NavLink to={"admin"}>Админ</NavLink>
            </ul>
          </div>

          <div className="navbar_items">
            <div className="navbar_items1">
              <a href="https://t.me/khasan_tursunov_9931">
                <img src={N1} alt="" />
              </a>
              <a href="https://t.me/khasan_tursunov_9931">
                <img src={N2} alt="" />
              </a>
              <a href="https://t.me/khasan_tursunov_9931">
                <img src={N3} alt="" />
              </a>
            </div>

            <div className="navbar_items2">
              <a href="tel:+7(8352)67-52-52">+7 (8352) 67-52-52</a>
              <a href="tel:+7 (927) 997-12-42">+7 (927) 997-12-42</a>
            </div>

            <div className="menu">
              <label htmlFor="check">
                <img src="./svg/Hamburger Menu.svg" alt="" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header



