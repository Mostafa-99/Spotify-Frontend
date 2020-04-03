import React, { Component } from 'react';
import DesktopNavbar from './DesktopNavbar'
import MobileNavbar from './MobileNavbar'


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isDesktop: true 
        };
    
        this.updatePredicate = this.updatePredicate.bind(this);
      }
      componentDidMount() {
        this.setState(()=> ({}))
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

export default Navbar