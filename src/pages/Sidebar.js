import React from "react";
// css link
import "./sidebar.css";
// Correct import from react-router-dom
import { NavLink } from "react-router-dom";
//react-icons
import { FaShop } from "react-icons/fa6";//shop react icons
import { FaTableColumns } from "react-icons/fa6";//table react icons
import { FaCreditCard } from "react-icons/fa";//credit-card react icons

import { PiSignInBold } from "react-icons/pi";//sign-in react icons


export default function Sidebar() {
  return (
    <>
      <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 ps ps--active-y" id="sidenav-main">
        <div className="sidenav-header">
          <NavLink className="navbar-brand m-0 d-flex items-center" to="/Dashboard">
            <img src={require("../img/logo.webp")} className="navbar-brand-img img-h-100" alt="logo" />
            <span className="ms-1 font-bold">Soft UI Dashboard 3</span>
          </NavLink>
        </div>
        <hr className="horizontal-dark mt-0" />
        <div className="nav-wrapper position-relative end-0">
          <ul className="nav nav-pills nav-fill flex-column p-1" role="tablist">
            <li className="nav-item">
              <NavLink className="nav-link mb-0 px-0 py-1 d-flex align-center" to="/Dashboard" activeClassName="active">
                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex items-center justify-center">
                  <FaShop />
                </div>
                <span className="nav-link-text ms-1">Dashboard</span>
              </NavLink>
            </li>
            <br />
            <li className="nav-item">
              <NavLink className="nav-link mb-0 px-0 py-1 d-flex align-center" to="/table" activeClassName="active">
                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex items-center justify-center">
                  <FaTableColumns />
                </div>
                <span className="nav-link-text ms-1">Tables</span>
              </NavLink>
            </li>
            <br />
            <li className="nav-item">
              <NavLink className="nav-link mb-0 px-0 py-1 d-flex align-center" to="/billing" activeClassName="active">
                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white me-2 text-center d-flex items-center justify-center">
                  <FaCreditCard />
                </div>
                <span className="nav-link-text ms-1">Billing</span>
              </NavLink>
            </li>
            <br />
            <li className="nav-item mt-3">
              <h6 className="ps-4 ms-2 uppercase text-xs font-extrabold opacity-6">Account Pages</h6>
            </li>
            <br />
            <li className="nav-item">
              <NavLink className="nav-link mb-0 px-0 py-1 d-flex align-center" to="/signin" activeClassName="active">
                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white me-2 text-center d-flex items-center justify-center">
                  <PiSignInBold />
                </div>
                <span className="nav-link-text ms-1">Sign In</span>
              </NavLink>
            </li>
            <br />
            <li className="nav-item">
              <NavLink className="nav-link mb-0 px-0 py-1 d-flex align-center" to="/signup" activeClassName="active">
                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white me-2 text-center d-flex items-center justify-center">
                  <img src={require('../img/signup.png')} alt="sign-up icon" className="sign-up" />
                </div>
                <span className="nav-link-text ms-1">Sign Up</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
