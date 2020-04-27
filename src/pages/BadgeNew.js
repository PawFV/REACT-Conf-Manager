import React from 'react';
import api from '../api'

import Badge from '../components/Badge';
import Footer from '../components/Footer'
import Loader from '../components/Loader'

import hashGravatar from '../components/functionals/hashGravatar'
import BadgeForm from '../components/BadgeForm.js';



class BadgeNew extends React.Component {

   gitUrl = "https://github.com/PawFV/";

   state = {
      loading: false,
      error: null,
      form: {
         firstName: '',
         lastName: '',
         email: '',
         contact: '',
         avatarUrl: '',
      }
   };

   handleChange = e => {
      const nextForm = this.state.form;
      nextForm[e.target.name] = e.target.value;
      //Comprobamos si el tipo es email para regresar el hash
      if (e.target.name === "email") {
         let imgHash = hashGravatar(e.target.value)
         nextForm["avatarUrl"] = imgHash;
      }
      this.setState({
      })
   }

   handleSubmit = async e => {
      e.preventDefault();
      this.setState({
         loading: true,
         error: null
      })

      try {
         await api.badges.create(this.state.form)
         this.setState({
            loading: false,
         })
         //Regresa a la página /badges
         this.props.history.push('/badges')
      } catch (error) {
         this.setState({
            loading: false,
            error: error,
         })
      }
   }

   render() {

      if (this.state.loading) {
         return <Loader />
      }


      return (
         <div className="BadgeNew__container">
            <div className="container-sm pt-3">
               <div className="row">
                  <div className="col-12 col-lg-6 mb-3">
                     <Badge
                        firstName={this.state.form.firstName || 'Name'}
                        lastName={this.state.form.lastName || 'Last name'}
                        contact={this.state.form.contact || 'contact'}
                        email={this.state.form.email || 'example@gmail.com'}
                        avatarUrl={this.state.form.avatarUrl}
                        gitUrl={this.gitUrl}
                        onChange={this.handleImgUrl}
                     />
                  </div>
                  <div className="col-12 col-lg-6 mb-3">
                     <h2>Your new guest</h2>
                     <BadgeForm
                        onChange={this.handleChange}
                        formvalues={this.state.form}
                        onSubmit={this.handleSubmit}
                        error={this.state.error}
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