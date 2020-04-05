import React, { Component } from 'react';
import DesktopNavbar from './DesktopNavbar'
import MobileNavbar from './MobileNavbar'

const exclusionArray = [
  '/login',
  '/signup',
  '/home',
  '/Home',
  '/webplayer/album'
]

class Navbar extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
          isDesktop: true ,
          isVisible:true
        };
    
        this.updatePredicate = this.updatePredicate.bind(this);
        this.updateVisibility = this.updateVisibility.bind(this);

      }
      componentDidMount() {
        this.setState(()=> ({}))
        this.updatePredicate();
        this.updateVisibility();
        window.addEventListener("resize", this.updatePredicate);
        window.addEventListener("mouseover",this.updateVisibility);
        window.addEventListener("mousemove",this.updateVisibility);
        window.addEventListener("mouseout",this.updateVisibility);
        window.addEventListener("click",this.updateVisibility);
        window.addEventListener("popstate",this.updateVisibility);
        

      }
    
      componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
        window.removeEventListener("mouseover",this.updateVisibility);
        window.removeEventListener("mousemove",this.updateVisibility);
        window.removeEventListener("mouseout",this.updateVisibility);
        window.removeEventListener("click",this.updateVisibility);
        window.removeEventListener("popstate",this.updateVisibility);


      }
    
      updatePredicate() {
        this.setState({ isDesktop: window.outerWidth > 900 });
      }

      updateVisibility() {

        this.setState({ isVisible: exclusionArray.indexOf(window.location.pathname) < 0})
        if(window.location.pathname.match());
        {
          //console.log(window.location.pathname);
          if(document.querySelector("#my-desk-navbar")!==null)
            document.querySelector("#my-desk-navbar").classList.add("index-fixed");
        }
          
        
      }
    
      
      render() {
       const isDesktop = this.state.isDesktop;
       const isVisible = this.state.isVisible;
        if(isVisible)
        {
          return (
              
            <div>
                
                {isDesktop?(
                  <DesktopNavbar/>
                    ) : (
                  <MobileNavbar/>
                      )}

            </div>
          );
        }
        else
        return null
        
      }
}

export default Navbar