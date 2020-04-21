import React, { Component } from 'react'
import './styles/BadgeForm.css'

export class BadgeForm extends Component {
    state = {};

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick = e => {
        console.log('Button click');
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log('Form was submited');
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <h1 className="Form__title">New Guest</h1>
                <form onSubmit={this.handleSubmit}>
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
                </form>
            </div>
        )
    }
}

export default BadgeForm
