import React from 'react';
import { Link } from 'react-router-dom';
import './styles/BadgeDetails.css';
import Badge from '../components/Badge';
import DeleteBadgeModal from '../components/DeleteBadgeModal';

function BadgeDetails(props) {
  const badge = props.badge;

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Badge
              firstName={badge.firstName}
              lastName={badge.lastName}
              email={badge.email}
            />
          </div>

          <div className="col">
            <h2>Actions</h2>
            <div>
              <div>
                <Link
                  className="btn btn-primary mb-4"
                  to={`/badges/${badge.id}/edit`}
                >
                  Edit
                </Link>
              </div>

              <div>
                <button onClick={props.openModal} className="btn btn-danger">Delete</button>
                <DeleteBadgeModal
                  isOpen={props.modalIsOpen}
                  closeModal={props.closeModal}
                  deleteBadge={props.deleteBadge}
                /> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BadgeDetails;
