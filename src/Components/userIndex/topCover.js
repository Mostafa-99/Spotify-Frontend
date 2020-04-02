import React from 'react';
import './userIndex.css';
import { Link } from 'react-router-dom';


function TopCover() {
    return (
        <section id="userindexsection">
            <div className="heromain">
                <div className="herohomegradient">
                    <div id="userindexcont1"className="container herobg">
                    <div id="userindexrow1" className="row herohomecontent">
                    <div className="whitepart" id="herotext">
                        <div className="col-xs-12 col-md-10  col-md-offset-1">
                             <h1 className="display-2" id="d2overrides">Go Premium. Be happy.</h1>
                        <div className="row" id="userindexrow2">
                           <Link to="/premium-code">
                            <button id="userindexb1"> Start Free Trial </button>
                            </Link>
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




