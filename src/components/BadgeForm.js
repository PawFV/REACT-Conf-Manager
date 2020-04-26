import React, { Component } from 'react'

export class BadgeForm extends Component {
    state = {};

    render() {
        return (
            <div>
                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="">First Name</label>
                        <input
                            maxLength="15"
                            className="form-control"
                            type="text"
                            name="firstName"
                            id="firstName"
                            onChange={this.props.onChange}
                            value={this.state.firstName}
                        />
                        <label htmlFor="">Last Name</label>
                        <input
                            maxLength="20"
                            className="form-control"
                            type="text"
                            name="lastName"
                            id="lastName"
                            onChange={this.props.onChange}
                            value={this.state.lastName}
                        />
                        <label htmlFor="">E-mail</label>
                        <input
                            className="form-control"
                            type="email"
                            name="email"
                            onChange={this.props.onChange}
                            value={this.state.email}
                        />
                        <label htmlFor="">Phone number</label>
                        <input
                            className="form-control"
                            type="text"
                            name="contact"
                            onChange={this.props.onChange}
                            value={this.state.contact}
                        />
                    </div>
                    <button className="__buttons Form__button"
                        onClick={this.handleClick} >Save</button>
                    {this.props.error && <p className="text-danger">{this.props.error.message}</p>}
                </form>
            </div>
        )
    }
}

export default BadgeForm
