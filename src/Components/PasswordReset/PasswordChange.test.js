import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import 'jest-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PasswordChange from './PasswordChange';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';



configure({adapter: new Adapter()});

describe('<PasswordChange />',() => {

let wrapper;
  beforeEach(() => {
    wrapper = shallow(<PasswordChange />);
  });

  it('renders without crashing', () => {

    const div =document.createElement('div');
    ReactDOM.render(<Router><PasswordChange/></Router>,div);
   });

  it('matches snapshot', () => {

   const tree =document.createElement('button')
   expect(tree).toMatchSnapshot();
  });

  it('renders correct items', () => {

    const welcome = "Reset Password";
    expect(wrapper.contains(welcome)).toEqual(true);
   });


   it('State Intialization', () => {
    expect(wrapper.state().status).toEqual("not done");
    expect(wrapper.state().password).toEqual("");
    expect(wrapper.state().confirmpassword).toEqual("");

  })
   


})
