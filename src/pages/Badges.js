import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import MiniLoader from '../components/MiniLoader'
import BadgesList from '../components/BadgesList';
import Loader from '../components/Loader'
import NotFound from './NotFound';
import api from '../api'; //API!
import { GiTechnoHeart } from 'react-icons/gi';


export class Badges extends Component {
   state = {
      loading: true,
      error: null,
      data: undefined
   };

   componentDidMount() {
      this.fetchData();
      // Interval para actualizar BadgesList
      this.intervalId = setInterval(this.fetchData, 5000);
   }

   fetchData = async () => {
      this.setState({ loading: true, error: null })
      try {
         const data = await api.badges.list()
         this.setState({ loading: false, data: data })
      } catch (error) {
         this.setState({ loading: false, error: error })
      }
   }

   componentWillUnmount() {
      clearInterval(this.intervalId)
   }

   render() {
      // LOADING API
      if (this.state.loading && !this.state.data) return <Loader />
      // Error
      if (this.state.error) return <NotFound />

      return (
         <div className="Badges">
            <div className="Badges__hero">
               <div className="Badges__container">
                  <GiTechnoHeart className="Badges_conf-logo" />
                  <Link to="/badges/new" className="Badges__buttons">
                     New Badge
                        </Link>
                  <div className="Badges__list">
                     <BadgesList
                        badges={this.state.data} />
                  </div>
               </div>
            </div>
            {this.state.loading && <MiniLoader />}
         </div>
      )
   }
}

export default Badges;
