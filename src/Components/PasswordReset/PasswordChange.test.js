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

    const welcome = "New Password";
    expect(wrapper.contains(welcome)).toEqual(true);
   });

   it('test functions', () => {
    // let component = renderer.create(<Router><PasswordChange/></Router>);
    // component.getInstance();
    // let data="123";
    // let v=component.validatePassword(data);

    // expect(v).toEqual(false);
    // data="1233456789";
    // v=component.validatePassword(data);
    // expect(v).toEqual(true);
    
   });


   it('State Intialization', () => {
    expect(wrapper.state().status).toEqual("not done");
    expect(wrapper.state().email).toEqual("");
    expect(wrapper.state().confirmpassword).toEqual("");

  })
   


})
