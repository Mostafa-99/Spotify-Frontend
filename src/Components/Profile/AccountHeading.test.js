import React from 'react'
import {shallow} from 'enzyme'
import AccountHeading from '../Profile/AccountHeading'
import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {expect} from 'chai'
configure({adapter: new Adapter()})

describe('AccountSettings',() => {
    it('It should render without errors',()=>{
        const wrapper=shallow(<AccountHeading/>)
        expect(wrapper.contains(<h1 className="display-3 font-weight-bold">Music without limits</h1>)).equal(true)
    })
})