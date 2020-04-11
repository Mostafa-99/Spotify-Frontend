import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import 'jest-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Navbar from './Navbar';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';



configure({adapter: new Adapter()});

describe('<Navbar />',() => {

let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Navbar />);
  });

  it('renders without crashing', () => {

   // const div =document.createElement('div');
    //ReactDOM.render(<Router><Navbar/></Router>,div);
   });

   it('State Intialization', () => {
       
    expect(wrapper.state().isDesktop).toEqual(true);
    expect(wrapper.state().isVisible).toEqual(true);

  })

  it('Desktop/Mobile Selector', () => {

    window.outerWidth=900;
    expect(wrapper.state().isDesktop).toEqual(true);
    
  })

  it('Path Selector', () => {

    window.location.pathname="/help";
    expect(wrapper.state().isVisible).toEqual(true);

  })
   


})
