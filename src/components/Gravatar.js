import React from 'react';
import md5 from 'md5';


const Gravatar = (props) => {
    const email = props.email;
    const hash = md5(email)

    return (
        <img
            className={props.className}
            src={this.props.avatarUrl}
            alt="Avatar" />
    );
}
// Badge__avatar-img
export default Gravatar;