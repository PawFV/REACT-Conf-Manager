import React from 'react';
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
                    <h2 className="Badge__header-title">Your guest</h2>
                </div>

                <div className="Badge__section-name">
                    <div className="Badge__avatar">
                        <Gravatar
                            className="Badge__avatar-img"
                            email={this.props.email}
                            alt="Avatar"
                        />
                    </div>

                    <h2 className="Badge__name">
                        {this.props.firstName}
                        <br />
                        {this.props.lastName}
                    </h2>

                </div>
                <div className="Badge__section-email">
                    <h5><a href={`mailto:${this.props.email}`}>{this.props.email}</a></h5>
                </div>
                <div className="Badge__section-info">
                    <GoMarkGithub className="Badge__footer-icon" /> <a className="Badge__section-url" href={this.props.gitUrl}>GitHub</a>
                </div>
            </div>
        )
    }
}

export default Badge;