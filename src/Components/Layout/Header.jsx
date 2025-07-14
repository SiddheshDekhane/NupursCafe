import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/HeaderStyles.css";
import nupurscafelogo from "../../assets/nupurscafelogo.png";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

function Header() {

  const [nav,setNav] =useState(false);

  const changeValueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
  
  scrollValue > 100 ? setNav(true) : setNav(false)
  };
  window.addEventListener("scroll" , changeValueOnScroll)

 
  return (
    <header>
      <Navbar collapseOnSelect expand="lg"  className={`${nav === true ? "sticky" : ""}`}    bg="dark" variant="dark">
        <Container>
          {/* ✅ Clickable logo that navigates to home page */}
          <Link to="/" className="navbar-brand">
            <img src={nupurscafelogo} alt="Logo" className="img-fluid" style={{ maxHeight: "60px" }} />
          </Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
  as={ScrollLink}
  to="home"
  smooth={true}
  duration={500}
  offset={-200}
>
  Home
</Nav.Link>
 <Nav.Link
  as={ScrollLink}
  to="menu"
  smooth={true}
  duration={500}
  offset={-200}  // optional for sticky headers
>
  Menu
</Nav.Link>

<Nav.Link
  as={ScrollLink}
  to="contact"
  smooth={true}
  duration={500}
  offset={-200}
>
  Contact
</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
