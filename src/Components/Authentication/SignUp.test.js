import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import 'jest-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Signup from './SignUp';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';



configure({adapter: new Adapter()});

describe('<Signup />',() => {

let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Signup />);
  });

  it('renders without crashing', () => {

    const div =document.createElement('div');
    ReactDOM.render(<Router><Signup/></Router>,div);
   });

  it('matches snapshot', () => {

   const tree =document.createElement('button')
   expect(tree).toMatchSnapshot();
  });

  it('renders correct items', () => {

    const welcome = "Sign up with your email address";
    expect(wrapper.contains(welcome)).toEqual(true);
   });

   it('test validate password function', () => {

    let component = wrapper.instance();

    let data="123";
    let v=component.validatePassword(data);

    expect(v).toEqual(false);
    data="1233456789";
    v=component.validatePassword(data);
    expect(v).toEqual(true);
    
   });

   it('test validate Gender function', () => {

    let component = wrapper.instance();

    let data=5335;
    let v=component.validateGender(data);

    expect(v).toEqual(false);
    data=1;
    v=component.validateGender(data);
    expect(v).toEqual(true);
    
   });

   it('test validate email function', () => {

    let component = wrapper.instance();

    let data="123juyfuy6767";
    let v;
    v=component.validateEmail(data);
    expect(v).toEqual(false);

    data="amr7afifi@gmail.com";
    v=component.validateEmail(data);
    expect(v).toEqual(true);
    
   });


   it('State Intialization', () => {
    expect(wrapper.state().status).toEqual("not connected");
    expect(wrapper.state().email).toEqual("");
    expect(wrapper.state().password).toEqual("");

  })
   


})
