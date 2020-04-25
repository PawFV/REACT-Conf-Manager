import React from 'react';
import './styles/Badge.css';
import { GoMarkGithub } from 'react-icons/go'
import { GiTechnoHeart } from 'react-icons/gi';
import Gravatar from './Gravatar'

class Badge extends React.Component {
    state = {}


    render() {
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <GiTechnoHeart className="Badge__header-icon" />
                    <h2>Your guest</h2>
                </div>

                <div className="Badge__section-name">
                    <div className="Badge__avatar">
                        <Gravatar
                            className="Badge__avatar-img"
                            email={this.props.email}
                            alt="Avatar"
                        />
                    </div>

                    <h1 className="Badge__name">
                        {this.props.firstName}
                        <br />
                        {this.props.lastName}
                    </h1>

                </div>

                <div className="Badge__section-info">
                    <h3>{this.props.jobTitle}</h3>
                    <GoMarkGithub className="Badge__footer-icon" /> <a className="Badge__section-url" href={this.props.gitUrl}>GitHub</a>
                </div>
            </div>
        )
    }
}

export default Badge;