import React from 'react';
import notFoundIMg from '../images/404.png';
// import backGroundImg from '../images/404background.png';

const NotFound = () => {
    return (
        <>
            <div className="cont">
                <img src={notFoundIMg} alt="No encontrado" />
            </div>
        </>
    );
}

export default NotFound;
