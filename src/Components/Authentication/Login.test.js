
import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import 'jest-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Login from './LogIn';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';


configure({adapter: new Adapter()});

describe('<Login />',() => {

let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  it('renders without crashing', () => {

    const div =document.createElement('div');
    ReactDOM.render(<Router><Login/></Router>,div);
   });

  it('matches snapshot', () => {

   const tree =document.createElement('button')
   expect(tree).toMatchSnapshot();
  });

  it('renders correct items', () => {

    const welcome = "To continue, log in to Spotify.";
    expect(wrapper.contains(welcome)).toEqual(true);
   });

  //  it('test functions', () => {
  //   let component = renderer.create(<Router><Login/></Router>);
  //   component.getInstance();
  //   let data="123";
  //   let v=component.validatePassword(data);

  //   expect(v).toEqual(false);
  //   data="1233456789";
  //   v=component.validatePassword(data);
  //   expect(v).toEqual(true);
    
  //  });

   it('test validate password function', () => {

    let component = wrapper.instance();

    let data="123";
    let v=component.validatePassword(data);

    expect(v).toEqual(false);
    data="1233456789";
    v=component.validatePassword(data);
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
    expect(wrapper.state().user.email).toEqual("");
    expect(wrapper.state().user.password).toEqual("");

  })
   

})
