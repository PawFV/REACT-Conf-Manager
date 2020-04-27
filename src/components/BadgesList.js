/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useMemo } from 'react';

// npm install react-icons --save 
// fuente: https://react-icons.netlify.app/#/
import { IoIosMail } from 'react-icons/io';
import { FaUserTie, FaEdit } from 'react-icons/fa';
import { MdWork } from 'react-icons/md'
import { IconContext } from "react-icons";
import { Link } from 'react-router-dom';

// custom hook for filtering.
function useSearchBadges(badges) {
   const [query, setQuery] = useState('');
   const [filteredBadges, setFilteredResults] = useState(badges);

   useMemo(() => {
      const result = badges.filter(badge => {
         return `${badge.firstName} ${badge.lastName}`
            .toLowerCase()
            .includes(query.toLowerCase())
      })
      setFilteredResults(result)
   }, [badges, query])

   return { query, setQuery, filteredBadges }
}

function BadgesList(props) {
   const badges = props.badges;

   const { query, setQuery, filteredBadges } = useSearchBadges(badges)

   if (filteredBadges.length === 0) {
      return (
         <div>
            <div className="form-group">
               <label htmlFor=""><b>Search by name:</b></label>
               <input type="text" className="form-control"
                  value={query}
                  onChange={(e) => {
                     setQuery(e.target.value)
                  }}
               />
            </div>
            <h3>No badges found</h3>
            <Link className="__buttons" to="/badges/new">
               Create new badge
                    </Link>
         </div>
      )
   }

   return (
      <div>

         <IconContext.Provider value={{ className: "Badges__list-icons" }}>
            <ul className="list">
               <div className="form-group">
                  <label htmlFor=""><b>Search by name:</b></label>
                  <input type="text" className="form-control"
                     value={query}
                     onChange={(e) => {
                        setQuery(e.target.value)
                     }}
                  />
               </div>
               {filteredBadges.map(badge => {
                  return (
                     <li className="list-item" key={badge.id}>

                        <img className="list-item__img" src={badge.avatarUrl} alt="" />

                        <div className="list-item__info">
                           <p>
                              <Link className="user-edit" to={`/badges/${badge.id}`}>
                                 <b><FaUserTie data-first />{badge.firstName} {badge.lastName}</b>
                              </Link>
                           </p>
                           <p> <a href={`mailto:${badge.email}`}><IoIosMail />{badge.email}</a> </p>
                           <p><MdWork /><a href={`tel:${badge.contact}`}>{badge.contact}</a> </p>
                        </div>

                        <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}/edit`}>
                           <FaEdit className="list-icons__edit" />
                        </Link>
                     </li>

                  )
               })}
            </ul>
         </IconContext.Provider>
      </div>
   )
}


export default BadgesList;
