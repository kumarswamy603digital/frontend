import { Nav, Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const TopNavigation = () => {
  return (
    <>
      <Navbar
        sticky="top"
        bg="white"
        variant="light"
        expand="md"
        className="mb-4 shadow-sm"
      >
        <Container>
          <Navbar.Brand
            as={NavLink}
            to="/"
            className="fw-bold text-primary user-manager-brand"
          >
            User Manager
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="user-manager-navbar" />
          <Navbar.Collapse id="user-manager-navbar">
            <Nav className="ms-auto justify-content-end gap-2">
              <Nav.Link
                as={NavLink}
                to="/"
                end
                className="fw-semibold"
              >
                Users
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/create"
                className="fw-semibold btn btn-primary text-white px-3 user-manager-nav-cta"
              >
                + Create User
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default TopNavigation;
