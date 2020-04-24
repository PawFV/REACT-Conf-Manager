import React, { Component } from 'react';

import './styles/LoaderAnimation.css';
import './styles/miniloader.css'

export default class Loader extends Component {
    render() {
        return (
            <div className="lds-grid mini-loader">
                <div />
                <div />
                <div />
            </div>
        );
    }
}
