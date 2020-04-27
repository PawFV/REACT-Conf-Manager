import React from 'react';
import { GoMarkGithub } from 'react-icons/go';
import { GiTechnoHeart } from 'react-icons/gi';
import hashGravatar from './functionals/hashGravatar';

const Badge = (props) => {
   return (
      <div className="Badge">
         <div className="Badge__header">
            <GiTechnoHeart className="Badge__header-icon" />
            <h2 className="Badge__header-title">Your guest</h2>
         </div>

         <div className="Badge__section-name">
            <div className="Badge__avatar">
               <img
                  className="Badge__avatar-img"
                  src={hashGravatar(props.email)}
                  alt="Avatar"
               />
            </div>

            <div className="Badge__name">
               <h2>{props.firstName}</h2>
               <h2>{props.lastName}</h2>

            </div>

         </div>
         <div className="Badge__section-email">
            <h5><a href={`mailto:${props.email}`}>{props.email}</a></h5>
         </div>
         <div className="Badge__section-info">
            <GoMarkGithub className="Badge__footer-icon" /> <a className="Badge__section-url" href={props.gitUrl}>GitHub</a>
         </div>
      </div>
   )

}

export default Badge;