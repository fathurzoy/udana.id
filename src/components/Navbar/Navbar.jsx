import React, { useState } from "react";
import logo_udana from "../../assets/udana-logo-white.png";
import "./Navbar.css";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <header className="site-header absolute " id="header">
        <div className="content-header">
          <div className="container-fluid">
            <nav className="navbar navbar-default navbar-static-top">
              <div className="navbar-x " ng-if="landing">
                <div className="left">
                  <a className="navbar-brand" href="/">
                    <img src={logo_udana} alt="" />
                  </a>
                  <ul className="nav navbar-nav navbar-left">
                    <li>
                      <a
                        href="https://udana.id/waralaba"
                        data-toggle="collapse"
                        data-target="#alignment-example"
                        className="text-white"
                      >
                        Waralaba
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://udana.id/faq"
                        data-toggle="collapse"
                        data-target="#alignment-example"
                        className="text-white"
                      >
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://udana.id/about"
                        data-toggle="collapse"
                        data-target="#alignment-example"
                        className="text-white"
                      >
                        Tentang
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="right">
                  <button
                    type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#alignment-example"
                    aria-expanded="false"
                    onClick={() => {
                      setShowModal(!showModal);
                    }}
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>{" "}
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>

                  <ul className="nav navbar-nav navbar-right ">
                    <li>
                      <a
                        href="https://udana.id/login"
                        data-toggle="collapse"
                        data-target="#alignment-example"
                        className="btn-login  text-white"
                      >
                        Masuk
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://udana.id/register"
                        className="btn btn-primary-udana  text-white"
                        data-toggle="collapse"
                        data-target="#alignment-example"
                      >
                        <b>Mulai Daftar</b>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div
          className="navModal"
          style={showModal ? { height: "flex" } : { display: "none" }}
        >
          <ul className="navModal1" ng-if="!investorToken">
            <li>
              <a
                href="https://udana.id/login"
                className="btn-login  text-white"
              >
                Masuk
              </a>
            </li>
            <li>
              <a
                href="https://udana.id/register"
                className="btn btn-primary-udana  text-white"
              >
                <b>Mulai Daftar</b>
              </a>
            </li>
          </ul>
          <ul className="nav navbar-nav ">
            <li>
              <a href="https://udana.id/waralaba" className="text-white">
                Waralaba
              </a>
            </li>
            <li>
              <a href="https://udana.id/faq" className="text-white">
                FAQ
              </a>
            </li>
            <li>
              <a href="https://udana.id/about" className="text-white">
                Tentang
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
