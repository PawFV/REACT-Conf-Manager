import React from 'react'

const BadgeForm = (props) => {
    return (
        <>
            <form onSubmit={props.onSubmit}>
                <div className="form-group">
                    <label htmlFor="">First Name</label>
                    <input
                        maxLength="15"
                        className="form-control"
                        type="text"
                        name="firstName"
                        id="firstName"
                        onChange={props.onChange}
                        value={props.firstName}

                    />
                    <label htmlFor="">Last Name</label>
                    <input
                        maxLength="20"
                        className="form-control"
                        type="text"
                        name="lastName"
                        id="lastName"
                        onChange={props.onChange}
                        value={props.lastName}

                    />
                    <label htmlFor="">E-mail</label>
                    <input
                        className="form-control"
                        type="email"
                        name="email"
                        onChange={props.onChange}
                        value={props.email}

                    />
                    <label htmlFor="">Phone number</label>
                    <input
                        className="form-control"
                        type="text"
                        name="contact"
                        onChange={props.onChange}
                        value={props.contact}
                    />
                </div>
                <button className="__buttons Form__button"
                    onClick={props.handleClick} >Save</button>
                {props.error && <p className="text-danger">{props.error.message}</p>}
            </form>
        </>
    )
}

export default BadgeForm
