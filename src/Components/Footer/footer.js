import React, { Component } from 'react';
import DesktopFooter from './desktop_footer'
import MobileFooter from './mobile_footer'



class footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isDesktop: false //This is where I am having problems
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

export default footer;