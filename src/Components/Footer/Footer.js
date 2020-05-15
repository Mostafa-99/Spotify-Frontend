import React, { Component } from 'react';
import DesktopFooter from './DesktopFooter'
import MobileFooter from './MobileFooter'

const exclusionArray = [
  '/login',
  '/signup',
  '/home',
  '/password-reset',
  '/resetPassword',
  '/artist-webplayer',
  '/webplayer/album',
  '/artist/album-page',
  '/webplayer/album',
  '/playlist-webplayer'

]

/**
 * Footer Component
 * @extends Component
 */
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isDesktop: false ,
          isVisible:true
        };
    
        this.updatePredicate = this.updatePredicate.bind(this);
        this.updateVisibility = this.updateVisibility.bind(this);
      }
      /**
     * Footer Component Mount state Adding Event Listeners 
     * 
     */
      componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
        this.updateVisibility();
        window.addEventListener("resize", this.updatePredicate);
        window.addEventListener("mouseover",this.updateVisibility);
        window.addEventListener("mousemove",this.updateVisibility);
        window.addEventListener("mouseout",this.updateVisibility);
        window.addEventListener("click",this.updateVisibility);
        window.addEventListener("popstate",this.updateVisibility);
      }
    
      /**
     * Footer Component UnMount state Removing Event Listeners 
     * 
     */
      componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
        window.removeEventListener("mouseover",this.updateVisibility);
        window.removeEventListener("mousemove",this.updateVisibility);
        window.removeEventListener("mouseout",this.updateVisibility);
        window.removeEventListener("click",this.updateVisibility);
        window.removeEventListener("popstate",this.updateVisibility);
      }
    
      /**
     * Function choosing between desktop and mobile version footer
     * 
     */
      updatePredicate() {
        this.setState({ isDesktop: window.outerWidth > 950 });
      }

      /**
     * Function removing footer from specific paths
     * 
     */
      updateVisibility() {

        this.setState({ isVisible: exclusionArray.indexOf(window.location.pathname) < 0});
     
      }
    
      render() {
        const isDesktop = this.state.isDesktop;
       const isVisible = this.state.isVisible;
        if(isVisible)
        {
          return (
              
            <div>
                
                {isDesktop?(
                  <DesktopFooter/>
                    ) : (
                  <MobileFooter/>
                      )}

            </div>
          );
        }
        else
        return null
      }
}

export default Footer;