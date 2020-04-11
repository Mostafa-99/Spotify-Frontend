import React from 'react'
import {shallow} from 'enzyme'
import 'jest-enzyme';
import Adapter from 'enzyme-adapter-react-16'
import '@testing-library/jest-dom/extend-expect';
import ChangePassword from '../Profile/ChangePassword';
import {configure} from 'enzyme'

configure({adapter: new Adapter()})

describe('ChangePassword',() => {
    it('It should render without errors',()=>{
        var wrapper = shallow(<ChangePassword />);
        expect(wrapper.contains(<label className="labels">Repeat new Password</label>)).toEqual(true)
        expect(wrapper.state('user').image).toEqual("");
    })
})