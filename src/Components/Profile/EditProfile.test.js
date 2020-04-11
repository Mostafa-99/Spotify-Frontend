import React from 'react'
import {shallow} from 'enzyme'
import 'jest-enzyme';
import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import '@testing-library/jest-dom/extend-expect';
import EditProfile from '../Profile/EditProfile';

configure({adapter: new Adapter()})

describe('EditProfile',() => {
    it('It should render without errors',()=>{
        var wrapper = shallow(<EditProfile />);
        expect(wrapper.contains(<label className="labels">Date of birth</label>)).toEqual(true)
        expect(wrapper.state('user').image).toEqual("");
        expect(wrapper.state('user').email).toEqual("");
        expect(wrapper.state('user').gender).toEqual("");
        expect(wrapper.state('user').dateOfBirth).toEqual("");
        expect(wrapper.state('user').name).toEqual("");
    })
})