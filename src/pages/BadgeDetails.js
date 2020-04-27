import React from 'react';
import { Link } from 'react-router-dom';

import Badge from '../components/Badge';
import DeleteBadgeModal from '../components/DeleteBadgeModal';


function BadgeDetails(props) {
   const badge = props.badge;

   return (
      <div className="container BadgeDetails">
         <div className="row BadgeDetails__container">

            <div className="col BadgeDetails__badge">
               <Badge
                  firstName={badge.firstName}
                  lastName={badge.lastName}
                  email={badge.email}
               />
            </div>


            <div className="col BadgeDetails__actions">
               <h3 className="BadgeDetails__actions-title">Actions</h3>

               <Link to={`/badges/${badge.id}/edit`} style={{ textDecoration: 'none' }}>
                  <button className="__buttons BadgeDetails__buttons BadgeDetails__buttons-edit">
                     Edit
            </button>
               </Link>

               <div>
                  <button onClick={props.openModal} className="__buttons BadgeDetails__buttons BadgeDetails__buttons-delete">Delete</button>
                  <DeleteBadgeModal
                     isOpen={props.modalIsOpen}
                     closeModal={props.closeModal}
                     deleteBadge={props.deleteBadge}
                  />
               </div>

            </div>
         </div>
      </div>
   );
}

export default BadgeDetails;
