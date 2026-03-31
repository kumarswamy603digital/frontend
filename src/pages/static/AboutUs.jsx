import Layout from "../../components/layout/Layout";
import { Card, Col, Row } from "react-bootstrap";

const AboutUs = () => {
  return (
    <Layout>
      <Row className="justify-content-center">
        <Col lg={9} md={11} xs={12}>
          <div className="page-hero mb-4">
            <h3 className="text-center mb-2">About User Manager</h3>
            <p className="text-center text-muted mb-0">
              A simple, production-minded UI to manage users: create, view, edit,
              and remove records with clear feedback and responsive screens.
            </p>
          </div>

          <Row className="g-3">
            <Col md={4}>
              <Card className="info-card h-100">
                <Card.Body>
                  <Card.Title className="mb-2 fs-6">Fast CRUD flows</Card.Title>
                  <Card.Text className="text-muted mb-0">
                    Clean forms and quick actions with success/error toasts.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="info-card h-100">
                <Card.Body>
                  <Card.Title className="mb-2 fs-6">Responsive UI</Card.Title>
                  <Card.Text className="text-muted mb-0">
                    Designed to look good on mobile, tablet, and desktop.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="info-card h-100">
                <Card.Body>
                  <Card.Title className="mb-2 fs-6">Ready to extend</Card.Title>
                  <Card.Text className="text-muted mb-0">
                    Add pagination, search, role fields, and real auth when you’re
                    ready.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Layout>
  );
};

export default AboutUs;
