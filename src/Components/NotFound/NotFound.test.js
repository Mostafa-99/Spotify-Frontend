import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import 'jest-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import  NotFound from './NotFound';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';



configure({adapter: new Adapter()});

describe('<NotFound />',() => {

let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NotFound />);
  });

  it('renders without crashing', () => {

    const div =document.createElement('div');
    ReactDOM.render(<Router><NotFound/></Router>,div);
   });


  it('renders correct items', () => {

    const welcome = "Go Home";
    expect(wrapper.contains(welcome)).toEqual(true);
   });

   
})
