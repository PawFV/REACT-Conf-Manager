import React from 'react';

import Badge from '../components/Badge';
import Footer from '../components/Footer'

import avatarImg from '../images/Siac.png';
import BadgeForm from '../components/BadgeForm.js';
import './styles/BadgeNew.css';


class BadgeNew extends React.Component {

    gitUrl = "https://github.com/PawFV/";

    state = {
        form: {
            firstName: '',
            lastName: '',
            email: '',
            contact: '',
            fontSize: '',
        }
    };

    handleChange = e => {
        const nextForm = this.state.form;
        nextForm[e.target.name] = e.target.value;
        this.setState({
        })

    }

    render() {
        return (
            <div className="BadgeNew__container">
                <div className="container-sm pt-3">
                    <div className="row">
                        <div className="col-12 col-lg-6 mb-3">
                            <Badge
                                firstName={this.state.form.firstName || 'FIRST_NAME'}
                                lastName={this.state.form.lastName || 'LAST_NAME'}
                                contact={this.state.form.contact || 'contact'}
                                email={this.state.form.email || 'email'}
                                avatarUrl={avatarImg}
                                fontSize={this.state.form.fontSize}
                                gitUrl={this.gitUrl}
                            />
                        </div>
                        <div className="col-12 col-lg-6 mb-3">
                            <BadgeForm
                                onChange={this.handleChange}
                                formvalues={this.state.form}
                            />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
export default BadgeNew;