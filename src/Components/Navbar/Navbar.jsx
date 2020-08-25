import React from "react";
import "./Navbar.css";
import { Container, Navbar, Nav } from "react-bootstrap";
const NavbarC = () => {
  return (
    <nav className="navbar fixed-top transparent ">
      <Container className="nav-content" style={{}}>
        <Navbar.Brand href="#">
          <div style={{ display: "flex" }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/76/Mobirise_4_Official_Logo.png"
              alt="mobirise"
              width="30"
              height="30"
              style={{ marginRight: "0.75em" }}
            />{" "}
            <p className="text-light text-uppercase">Mobirise</p>
          </div>
        </Navbar.Brand>
        <Nav style={{ textTransform: "uppercase", color: "white" }}>
          <Nav className="nav-link" href="#home">
            one page
          </Nav>
          <Nav className="nav-link" href="#link">
            Slider
          </Nav>
          <Nav className="nav-link" href="#link">
            Video
          </Nav>
          <Nav className="nav-link" href="#link">
            blog
          </Nav>
          <button className="btn btn-outline-light nav-link text-light">
            Download
          </button>
        </Nav>
      </Container>
    </nav>
  );
};
export default NavbarC;
