import React from 'react'
import {shallow} from 'enzyme'
import 'jest-enzyme';
import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import '@testing-library/jest-dom/extend-expect';
import ArtistSideBar from '../SideBar/ArtistSidebar';
import {Link} from 'react-router-dom';
configure({adapter: new Adapter()})

describe('ArtistSideBar',() => {
    it('It should render without errors',()=>{
        var wrapper = shallow(<ArtistSideBar img={"imgurl"}/>);
        expect(wrapper.contains(<Link to="/artist"><li className="list"><i className="fa fa-music icon"></i> My Music </li></Link>)).toEqual(false)
    })
})