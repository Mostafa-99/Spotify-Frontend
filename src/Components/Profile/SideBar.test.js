import React from 'react'
import {shallow} from 'enzyme'
import 'jest-enzyme';
import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import '@testing-library/jest-dom/extend-expect';
import SideBar from '../Profile/SideBar';
import {Link} from 'react-router-dom';
configure({adapter: new Adapter()})

describe('SideBar',() => {
    it('It should render without errors',()=>{
        var wrapper = shallow(<SideBar img={"imgurl"}/>);
        expect(wrapper.contains(<Link to="/account-overview"><li className="list first"><span className="fa fa-home icon"></span> Account overview </li></Link>)).toEqual(true)
    })
})