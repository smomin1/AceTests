import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userActions";

const Header = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  useEffect(() => {}, [userInfo]);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <Link to="/">AceTests</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Form inline>
              <Form.Control type="text" placeholder="Search" className="me-2" />
            </Form>
          </Nav>
          <Nav>
            <Nav.Link>
              <Link to="MyNotes">My Notes</Link>
            </Nav.Link>
            <NavDropdown title="UserName" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
              <NavDropdown.Item onClick={logoutHandler}>
                Logout
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
