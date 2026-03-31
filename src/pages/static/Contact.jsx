import Layout from "../../components/layout/Layout";
import { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { toast } from "react-toastify";

const Contact = () => {
  const [isCopying, setIsCopying] = useState(false);
  const CONTACT_EMAIL = "kumarswamyry789@gmail.com";

  const copyEmail = async () => {
    try {
      setIsCopying(true);
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      toast.success("Email copied to clipboard.");
    } catch (e) {
      toast.info("Copy manually: kumarswamyry789@gmail.com");
    } finally {
      setIsCopying(false);
    }
  };

  return (
    <Layout>
      <Row className="justify-content-center">
        <Col lg={9} md={11} xs={12}>
          <div className="page-hero mb-4">
            <h3 className="text-center mb-2">Contact Us</h3>
            <p className="text-center text-muted mb-0">
              Reach out for support, questions, or feature requests.
            </p>
          </div>

          <Card className="info-card shadow-sm">
            <Card.Body className="text-center">
              <p className="mb-2">
                Contact me at{" "}
                <span className="fst-italic text-dark">
                  {CONTACT_EMAIL}
                </span>
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-2 mt-3">
                <Button
                  variant="primary"
                  onClick={copyEmail}
                  disabled={isCopying}
                >
                  {isCopying ? "Copying..." : "Copy email"}
                </Button>
                <Button
                  variant="outline-secondary"
                  href={`mailto:${CONTACT_EMAIL}`}
                >
                  Send email
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
};

export default Contact;
