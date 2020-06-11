import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import 'jest-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import  DesktopNavbar from './DesktopNavbar';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';



configure({adapter: new Adapter()});

describe('<DesktopNavbar />',() => {

let wrapper;
  beforeEach(() => {
    wrapper = shallow(<DesktopNavbar />);
  });

  it('renders without crashing', () => {

    //const div =document.createElement('div');
    //ReactDOM.render(<Router><DesktopNavbar/></Router>,div);
   });


  it('renders correct items', () => {

    const welcome = "for artist";
    expect(wrapper.contains(welcome)).toEqual(false);
   });

   
})
