import React from "react";
import { useCallback, useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

import Layout from "../../components/layout/Layout";
import * as userService from "../../services/user.service";

const RetrieveUser = () => {
  const { userId } = useParams();

  const [user, setUser] = useState({});

  const fetchUser = useCallback(async () => {
    try {
      const user = await userService.retrieveUser(userId);
      setUser(user);
    } catch (err) {
      setUser(null);
    }
  }, [userId]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <Layout>
      {user ? (
        <Row className="justify-content-center">
          <Col lg={5}>
            <h3 className="text-center mb-3">{user.name}</h3>
            <Card className="shadow-sm">
              <Card.Body className="text-center">
                <p className="mb-1 text-muted">{user.email}</p>
                {user.city && user.country && (
                  <p className="mb-3 text-secondary small">
                    {user.city} · {user.country}
                  </p>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ) : (
        <p className="text-center text-danger fw-bold">User cannot be found.</p>
      )}
    </Layout>
  );
};

export default RetrieveUser;
