import React from "react";
import { Container } from "react-bootstrap";
// import { Button } from "react-bootstrap";
import ButtonComponent from "../Button/Button";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import "./NavbarStyle.scss";
import NotificationJson from "../../JsonData/NotificationJson";
import { NotificationIcon, UserIcon } from "../Icons";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import clsx from "clsx";
import comingsoon from "images/comingsoon.svg";
const shortenAddress = (val) => {
  return val.slice(0, 4) + "..." + val.slice(-4);
};

const useWalletAddress = ({ short = false }) => {
  const user = useSelector((state) => state.auth.user);
  const walletAddress = user
    ? user.walletAddress
    : "0x1341133ba79815e04e008f7635212bf086e821301";
  return short ? shortenAddress(walletAddress) : walletAddress;
};

function NavBar(props) {
  return (
    <Navbar expand="lg" className="pt-4 pb-4 bg-none">
      <Container>
        <Navbar.Brand onClick={(e) => e.preventDefault()}>
          <Link to="/">
            <img
              src="/assets/images/logo.svg"
              className="d-inline-block align-top by-logo"
              alt="Logo"
            />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mr-auto">
            <Nav.Link
              href="/resource"
              className={
                window.location.pathname === "/"
                  ? "colorBlack pr-md-5"
                  : "colorBlack pr-md-5 active"
              }
            >
              Resources
            </Nav.Link>
            <Nav.Link href="/farmers" className="colorBlack pr-md-5">
              Farmers
            </Nav.Link>
            <Nav.Link href="#" className="colorBlack pr-md-5">
              Developers
            </Nav.Link>
            <Nav.Link href="/team" className="colorBlack">
              Team
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="position-relative">
          <ButtonComponent disabled variant="colorBlack btn-outline px-4">
            DAPP
          </ButtonComponent>
          <img className="coming-soon" src={comingsoon} />
        </div>
      </Container>
    </Navbar>
  );
}
function timeSince(date) {
  // var seconds = Math.floor((new Date() - date) / 1000);
  var seconds = Math.floor(new Date().getTime() / 1000 - date);
  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years ago";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months ago";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days ago";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours ago";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes ago";
  }
  return Math.floor(seconds) + " seconds ago";
}

const NavbarLink = ({ to, children }) => {
  const { pathname } = useLocation();

  return (
    <Link
      className={clsx("colorBlack pr-md-5", { active: pathname === to })}
      component={Nav.Link}
      to={to}
    >
      {children}
    </Link>
  );
};

function NavBar2(props) {
  const address = useWalletAddress({ short: true });
  return (
    <Navbar expand="lg" className="pt-4 pb-4 bgnav">
      <Container>
        <Navbar.Brand href="#">
          <Link to="/">
            <img
              src="/assets/images/logo.svg"
              className="d-inline-block align-top by-logo"
              alt="Logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mr-auto">
            <NavbarLink to="/resource">Resources</NavbarLink>
            <NavbarLink to="/myaccount_new">My Investment</NavbarLink>
            <NavbarLink to="/farmers">Farmers</NavbarLink>
            <NavbarLink to="/developers">Developers</NavbarLink>
          </Nav>
        </Navbar.Collapse>

        <div className="">
          <Dropdown className="dropNav1">
            <Dropdown.Toggle
              id="dropdown-basic"
              className=" mr-0 ml-2 ml-md-0 mr-md-2"
            >
              <img
                src="/assets/images/notifications.png"
                className="d-inline-block align-top"
                alt="Image"
              />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <p className="notifyHead">Notifications</p>

              {NotificationJson.map((item, index) => {
                return (
                  <Dropdown.Item href="#">
                    <p>{item.notification}</p>
                    <span>{timeSince(item.date)}</span>
                  </Dropdown.Item>
                );
              })}
              <div className="viewDrop">
                <a href="#"> View All</a>
              </div>
            </Dropdown.Menu>
          </Dropdown>

          <a href="#">
            <img
              src="/assets/images/user.png"
              className="d-inline-block align-top mr-3 ml-2 ml-md-0 mr-md-4 mt-1"
              alt="Image"
            />
          </a>
        </div>
        <ButtonComponent variant="colorBlack btn-outline btnusername">
          <img
            src="/assets/images/usericon.png"
            className="d-inline-block align-top mr-md-2"
            alt="Image"
          />
          <span> {address}</span>
        </ButtonComponent>
      </Container>
    </Navbar>
  );
}

const NavBar3 = () => {
  const address = useWalletAddress({ short: true });
  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: "#000" }}
      className="pt-4 pb-4 text-white"
    >
      <Container>
        <Link to="/">
          <Navbar.Brand href="#">
            <img
              src="/assets/images/logo-light.svg"
              className="d-inline-block align-top by-logo"
              alt="Logo"
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mr-auto">
            <Nav.Link href="/resource" className=" text-white pr-md-5">
              Resources
            </Nav.Link>
            <Nav.Link href="/farmers" className=" text-white pr-md-5">
              Farmers
            </Nav.Link>
            <Nav.Link href="#" className="text-white">
              Developers
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <div className="">
          <Dropdown className="dropNav1">
            <Dropdown.Toggle
              id="dropdown-basic"
              className=" mr-0 ml-2 ml-md-0 mr-md-2"
            >
              <NotificationIcon className="notification-icon" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <p className="notifyHead">Notifications</p>

              {NotificationJson.map((item, index) => {
                return (
                  <Dropdown.Item href="#">
                    <p>{item.notification}</p>
                    <span>{timeSince(item.date)}</span>
                  </Dropdown.Item>
                );
              })}
              <div className="viewDrop">
                <a href="#"> View All</a>
              </div>
            </Dropdown.Menu>
          </Dropdown>

          <a href="#" className="mr-3">
            <UserIcon className="user-icon" />
          </a>
        </div>
        <ButtonComponent variant="btn-outline btnusername btnusername--white">
          <img
            src="/assets/images/usericon.png"
            className="d-inline-block align-top mr-md-2"
            alt="Image"
          />
          <span> {address} </span>
        </ButtonComponent>
      </Container>
    </Navbar>
  );
};

export { NavBar, NavBar2, NavBar3 };
