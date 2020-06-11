import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import 'jest-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PremiumCode from './PremiumCode';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';



configure({adapter: new Adapter()});

describe('<PremiumCode />',() => {

let wrapper;
  beforeEach(() => {
    wrapper = shallow(<PremiumCode />);
  });

  it('renders without crashing', () => {

    const div =document.createElement('div');
    ReactDOM.render(<Router><PremiumCode/></Router>,div);
   });

  it('renders correct items', () => {

    const welcome = "Get Premium";
    expect(wrapper.contains(welcome)).toEqual(true);
   });

   it('State Intialization', () => {
    expect(wrapper.state().code).toEqual("");
  })
   
})
