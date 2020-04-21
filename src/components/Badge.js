import React from 'react';
import './styles/Badge.css';
import { GoMarkGithub } from 'react-icons/go'
import { GiTechnoHeart } from 'react-icons/gi';

class Badge extends React.Component {
    render() {
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <GiTechnoHeart className="Badge__header-icon" />
                    <h2>Your new guest</h2>
                </div>

                <div className="Badge__section-name">
                    <div className="Badge__avatar">
                        {/*  */}
                    </div>

                    <div className="Badge__name">
                        <h1>{this.props.firstName}
                            <br />
                            {this.props.lastName}</h1>
                    </div>

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