import Layout from '../../components/layout/Layout';
import UserCard from '../../components/user/UserCard';
import * as userService from '../../services/user.service';
import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { List } from 'react-content-loader';

const UsersList = () => {
  const [users, setUsers] = useState({}); // Important, default need to be empty object
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUsers = async () => {
    try {
      setIsLoading(true);

      const users = await userService.retrieveAllUsers();
      setUsers(users);
    } catch (error) {
      const retrieveErrorMessage = () => {
        const apiErrorMessage = error?.response?.data?.message;

        // Null Coalescing Operator
        return apiErrorMessage ?? 'Error while connecting to the server';
      };
      setErrorMessage(retrieveErrorMessage());
    } finally {
      setIsLoading(false); // At this stage, we can stop the loader
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const hasUsers = Object.values(users).length > 0;

  return (
    <Layout>
      {isLoading ? (
        <div className="text-center py-5">
          <List />
        </div>
      ) : errorMessage ? (
        <div className="user-manager-error text-center py-5">
          <div className="user-manager-error-icon" aria-hidden="true">
            !
          </div>
          <h3 className="mt-3 text-danger fw-bold">{errorMessage}</h3>
          <p className="text-muted mb-4 mt-2">
            Check your backend server and try again.
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-2">
            <Button variant="primary" onClick={fetchUsers}>
              Retry
            </Button>
            <Button
              variant="outline-secondary"
              as={NavLink}
              to="/create"
            >
              Create a user
            </Button>
          </div>
        </div>
      ) : hasUsers ? (
        <>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="mb-0">Users</h4>
            <span className="text-muted small">
              {hasUsers ? `${Object.values(users).length} users` : "No users"}
            </span>
          </div>
          <Row className="justify-content-start g-3">
            {Object.values(users).map((user) => (
              <Col key={user.id} lg={4} md={6} sm={12}>
                <UserCard user={user} />
              </Col>
            ))}
          </Row>
        </>
      ) : (
        <div className="user-manager-empty text-center py-5">
          <h4 className="mb-2">No users yet</h4>
          <p className="text-muted mb-4">
            Create your first user to get started.
          </p>
          <Button variant="primary" as={NavLink} to="/create">
            + Create User
          </Button>
        </div>
      )}
    </Layout>
  );
};

export default UsersList;
