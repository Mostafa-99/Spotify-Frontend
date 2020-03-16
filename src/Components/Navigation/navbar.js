import React, { Component } from 'react';
import DesktopNavbar from './desktop_navbar'
import MobileNavbar from './mobile_navbar'

class navbar extends Component {
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
        this.setState({ isDesktop: window.innerWidth > 900 });
      }
    
      render() {
        const isDesktop = this.state.isDesktop;
    
        return (
          <div>
            {isDesktop ?(
              <DesktopNavbar/>
            ) : (
              <MobileNavbar/>
            )}
          </div>
        );
      }
}

export default navbar