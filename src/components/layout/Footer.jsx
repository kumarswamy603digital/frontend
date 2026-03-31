import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="user-manager-footer mt-auto py-4">
      <Container>
        <hr />
        <Row className="align-items-center gy-3">
          <Col md={4} className="text-center text-md-start">
            <span className="text-muted small">
              © {year} User Manager. All rights reserved.
            </span>
          </Col>

          <Col
            md={8}
            className="d-flex flex-wrap justify-content-center justify-content-md-end gap-3 user-manager-footer-links"
          >
            <NavLink className="text-muted user-manager-footer-link" to="/">
              Users
            </NavLink>
            <NavLink
              className="text-muted user-manager-footer-link"
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className="text-muted user-manager-footer-link"
              to="/contact"
            >
              Contact
            </NavLink>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
