import React from 'react';
import './UserIndex.css';
import { Link } from 'react-router-dom';

        /**Gets the baseURL from configrations context of the user
   * @memberof MainIndex
   */
function TopCover() {
    return (
  
        <section id="user-index-section">
            <div className="hero-main">
                <div className="hero-home-gradient">
                    <div id="user-index-cover-cont"className="container hero-background">
                    <div id="user-index-cover-row" className="row hero-home-content">
                    <div className="whitepart" id="hero-text">
                        <div className="col-xs-12 col-md-10 col-md-offset-1">
                             <h1 className="display-2" id="d2-overrides">Go Premium. Be happy.</h1>
                        <div className="row" id="user-index-row-2">
                          
                           <Link to="/premium"> <button id="index-cover-btn"> Start Premium Now </button></Link>
                            
                        </div>
                        </div>
                        </div>
                      </div>                      
                    </div>
                </div>                
            </div>
         </section>
            
 );
}

export default TopCover;





