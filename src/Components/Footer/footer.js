import React, { Component } from 'react';
import DesktopFooter from './DesktopFooter'
import MobileFooter from './MobileFooter'
/* */

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isDesktop: false 
        };
    
        this.updatePredicate = this.updatePredicate.bind(this);
      }
      componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
      }
    
      componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
      }
    
      updatePredicate() {
        this.setState({ isDesktop: window.innerWidth > 800 });
      }
    
      render() {
        const isDesktop = this.state.isDesktop;
    
        return (
          <div>
            {isDesktop ?(
              <DesktopFooter/>
            ) : (
              <MobileFooter/>
            )}
          </div>
        );
      }
}

export default Footer;