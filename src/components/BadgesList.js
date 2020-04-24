/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

// npm install react-icons --save 
// fuente: https://react-icons.netlify.app/#/
import { IoIosMail } from 'react-icons/io';
import { FaUserTie, FaMobileAlt, FaEdit } from 'react-icons/fa';
import { MdWork } from 'react-icons/md'
import { IconContext } from "react-icons";
import { Link } from 'react-router-dom';


export class BadgesList extends Component {
    render() {
        // Si no existen datos.
        if (this.props.badges.length === 0) {
            return (
                <div>
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
                        {this.props.badges.map(badge => {
                            return (

                                <li className="list-item" key={badge.id}>

                                    <img src={badge.avatarUrl} alt="" />

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
}

export default BadgesList;
