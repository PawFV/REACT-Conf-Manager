import React from 'react';
import { GiProcessor } from 'react-icons/gi';

import { Link } from 'react-router-dom';
import homeImg from '../images/home_img.png'
const Home = () => {
   return (
      <>
         <div className="container-fluid Home-background">
            <div className="container Home">
               <div className="row Home__row">
                  <div className="col-12 col-md-6 Home__col-title">
                     <GiProcessor className="Home__col-logo" />
                     <h1 className="Home__col-title">Welcome to</h1>
                     <h1><span className="Home__col-title--span1">TechLove</span>
                        <span className="Home__col-title--span2"> Conf</span></h1>
                     <h1>Manager</h1>
                     <Link to="/badges/" className="Home__buttons">
                        Get started!
                    </Link>
                  </div>
                  <div className="col-md-6 Home__col-img">
                     <img className="Home__img" src={homeImg} alt="" />
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default Home;
