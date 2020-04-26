import React, { Component } from 'react';

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
