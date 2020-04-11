import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import 'jest-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DesktopFooter from './DesktopFooter';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';



configure({adapter: new Adapter()});

describe('<DesktopFooter />',() => {

let wrapper;
  beforeEach(() => {
    wrapper = shallow(<DesktopFooter />);
  });

  it('renders without crashing', () => {

    const div =document.createElement('div');
    ReactDOM.render(<Router><DesktopFooter/></Router>,div);
   });


  it('renders correct items', () => {

    const welcome = "download";
    expect(wrapper.contains(welcome)).toEqual(false);
   });

   

})
