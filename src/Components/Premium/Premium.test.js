import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import 'jest-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Premium from './Premium';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';



configure({adapter: new Adapter()});

describe('<Premium />',() => {

let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Premium />);
  });

  it('renders without crashing', () => {

    const div =document.createElement('div');
    ReactDOM.render(<Router><Premium/></Router>,div);
   });

  it('renders correct items', () => {

    const welcome = "Get Premium free for 1 month";
    expect(wrapper.contains(welcome)).toEqual(true);
   });
})
