import React from 'react'
import {shallow} from 'enzyme'
import 'jest-enzyme';
import AccountSettings from '../Profile/AccountSettings'
import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import '@testing-library/jest-dom/extend-expect';

configure({adapter: new Adapter()})

describe('AccountSettings',() => {
    it('It should render without errors',()=>{
        var wrapper = shallow(<AccountSettings/>);
        expect(wrapper.state('user').dateOfBirth).toEqual("");
        expect(wrapper.state('user').email).toEqual("");
        expect(wrapper.state('user').image).toEqual("");
    })
})