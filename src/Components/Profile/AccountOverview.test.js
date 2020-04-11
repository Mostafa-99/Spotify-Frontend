import React from 'react'
import {shallow} from 'enzyme'
import 'jest-enzyme';
import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import '@testing-library/jest-dom/extend-expect';
import AccountOverview from '../Profile/AccountOverview';

configure({adapter: new Adapter()})

describe('AccountOverview',() => {
    it('It should render without errors',()=>{
        var wrapper = shallow(<AccountOverview info={{
            dateOfBirth:"14-5-1999",
            email:"test@email.com",
            image:"urlimage",
        }}/>);
        expect(wrapper.contains(<h1 className="overview">Account overview</h1>)).toEqual(true)
    })
})