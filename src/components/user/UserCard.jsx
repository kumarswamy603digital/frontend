import { Button, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <Card className="h-100 shadow-sm user-card">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start mb-2">
          <div>
            <h5 className="mb-1">{user.name}</h5>
            <p className="mb-1 text-muted small">{user.email}</p>
          </div>
        </div>
        {user.city && user.country && (
          <p className="mb-3 text-secondary small">
            {user.city} · {user.country}
          </p>
        )}
        <div className="d-flex gap-2">
          <Button
            size="sm"
            variant="outline-primary"
            as={NavLink}
            to={`/${user.id}`}
          >
            View
          </Button>
          <Button
            size="sm"
            variant="primary"
            as={NavLink}
            to={`/edit/${user.id}`}
          >
            Edit
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
