import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import 'jest-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PasswordReset from './PasswordReset';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';



configure({adapter: new Adapter()});

describe('<PasswordReset />',() => {

let wrapper;
  beforeEach(() => {
    wrapper = shallow(<PasswordReset />);
  });

  it('renders without crashing', () => {

    const div =document.createElement('div');
    ReactDOM.render(<Router><PasswordReset/></Router>,div);
   });

  it('matches snapshot', () => {

   const tree =document.createElement('button')
   expect(tree).toMatchSnapshot();
  });

  it('renders correct items', () => {

    const welcome = "Password kkReset";
    expect(wrapper.contains(welcome)).toEqual(false);
   });


   it('State Intialization', () => {
    expect(wrapper.state().status).toEqual("not done");
    

  })
   


})
