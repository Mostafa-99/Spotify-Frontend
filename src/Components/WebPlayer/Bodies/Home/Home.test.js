import React from 'react'
import {shallow} from 'enzyme'
import 'jest-enzyme';
import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import '@testing-library/jest-dom/extend-expect';
import Home from '../Home/Home';
configure({adapter: new Adapter()})

describe('Home',() => {
    it('It should render without errors',()=>{
        var wrapper = shallow(<Home/>);
        expect(wrapper.contains(<h2 className="section-title popular-playlists">Popular Playlistsss</h2>)).toEqual(false);
        expect(wrapper.state('popularAlbums')).toEqual([]);
        expect(wrapper.state('mostRecentAlbums')).toEqual([]);
        expect(wrapper.state('popularPlayLists')).toEqual([]);
        expect(wrapper.state('mostRecentPlayLists')).toEqual([]);
    })
})