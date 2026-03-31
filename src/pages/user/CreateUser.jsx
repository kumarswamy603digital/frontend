import React, { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { toast } from "react-toastify";

import Layout from "../../components/layout/Layout";
import { firstUpperCase } from "../../helpers/string.helper";
import * as userService from "../../services/user.service";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitForm = async (event) => {
    event.preventDefault();

    if (!name || !email) {
      toast.warn("Name and email are required.");
      return;
    }

    const createUserPayload = {
      name,
      email,
      city,
      country,
    };

    try {
      setIsSubmitting(true);
      const response = await userService.createUser(createUserPayload);

      if (response?.status) {
        const userName = response?.user?.name;

        toast.success(`User ${userName} has been created!`);

        // Clear states
        setName("");
        setEmail("");
        setCity("");
        setCountry("");
      } else {
        toast.warn("An error has occurred.");
      }
    } catch (error) {
      const getErrorMessage = () => {
        const {
          data: {
            errors: { body },
          },
        } = error.response;

        const message = body[0]?.message;

        // Uppercase the first letter of the message
        return firstUpperCase(message);
      };
      toast.error(getErrorMessage());
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <Row className="justify-content-center">
        <Col lg={9} md={11} xs={12}>
          <div className="page-hero mb-4">
            <h3 className="text-center mb-2">Create User</h3>
            <p className="text-center text-muted mb-0">
              Add a new user with clean validation and a responsive form
              layout.
            </p>
          </div>

          <Card className="info-card shadow-sm">
            <Card.Body>
              <Form onSubmit={submitForm}>
                <Row className="g-3">
                  <Col md={6} xs={12}>
                    <Form.Group className="mb-0">
                      <Form.Label htmlFor="name">Name</Form.Label>
                      <Form.Control
                        id="name"
                        name="name"
                        type="text"
                        placeholder="e.g. John Doe"
                        required
                        onChange={(fieldElement) =>
                          setName(fieldElement.target.value)
                        }
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6} xs={12}>
                    <Form.Group className="mb-0">
                      <Form.Label htmlFor="email">Email</Form.Label>
                      <Form.Control
                        id="email"
                        name="email"
                        type="email"
                        placeholder="e.g. john@example.com"
                        required
                        onChange={(fieldElement) =>
                          setEmail(fieldElement.target.value)
                        }
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6} xs={12}>
                    <Form.Group className="mb-0">
                      <Form.Label htmlFor="city">City</Form.Label>
                      <Form.Control
                        id="city"
                        name="city"
                        type="text"
                        placeholder="e.g. Paris"
                        onChange={(fieldElement) =>
                          setCity(fieldElement.target.value)
                        }
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6} xs={12}>
                    <Form.Group className="mb-0">
                      <Form.Label htmlFor="country">Country</Form.Label>
                      <Form.Control
                        id="country"
                        name="country"
                        type="text"
                        placeholder="e.g. France"
                        onChange={(fieldElement) =>
                          setCountry(fieldElement.target.value)
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <div className="d-grid d-sm-flex gap-2 justify-content-sm-start mt-4">
                  <Button
                    variant="primary"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-100 w-sm-auto"
                  >
                    {isSubmitting ? "Adding..." : "Add User"}
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
};

export default CreateUser;
