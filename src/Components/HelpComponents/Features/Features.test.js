import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import FeaturesMain from './FeaturesMain'
import ArtistProfilesFeature from './ArtistProfilesFeature'
import SearchFeature from './SearchFeature'
import ShufflePlayFeature from './ShufflePlayFeature'
import VideosFeature from './VideosFeature'
import YourLibraryFeature from './YourLibraryFeature'


/* to be transfered to #src/setupTests.js */

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('<FeaturesMain />', () => {

    it('FeaturesMain renders without crashing', () => {
        shallow(<FeaturesMain />);
    });
    it('renders Account Help header', () => {
        const wrapper = shallow(<FeaturesMain />);
        expect(wrapper.contains(<h1 className="features-heading">Features</h1>)).equal(true);
    });
});


describe(' \n Features Articles: \n ----------------------', () => {

    describe('<ArtistProfilesFeature />', () => {

        it('ArtistProfilesFeature renders without crashing', () => {
            shallow(<ArtistProfilesFeature />);
        });
        it('renders ArtistProfilesFeature header', () => {
            const wrapper = shallow(<ArtistProfilesFeature />);
            expect(wrapper.contains(<h1 className="features-heading">Artist profiles</h1>)).equal(true);
        });
    });

    describe('<VideosFeature />', () => {

        it('VideosFeature renders without crashing', () => {
            shallow(<VideosFeature />);
        });
        it('renders VideosFeature header', () => {
            const wrapper = shallow(<VideosFeature />);
            expect(wrapper.contains(<h1 className="features-heading">Videos</h1>)).equal(true);
        });
    });

    describe('<SearchFeature />', () => {

        it('SearchFeature renders without crashing', () => {
            shallow(<SearchFeature />);
        });
        it('renders SearchFeature header', () => {
            const wrapper = shallow(<SearchFeature />);
            expect(wrapper.contains(<h1 className="features-heading">Search</h1>)).equal(true);
        });
    });

    describe('<YourLibraryFeature />', () => {

        it('YourLibraryFeature renders without crashing', () => {
            shallow(<YourLibraryFeature />);
        });
        it('renders YourLibraryFeature header', () => {
            const wrapper = shallow(<YourLibraryFeature />);
            expect(wrapper.contains(<h1 className="features-heading">Your Library</h1>)).equal(true);
        });
    });

    describe('<ShufflePlayFeature />', () => {

        it('ShufflePlayFeature renders without crashing', () => {
            shallow(<ShufflePlayFeature />);
        });
        it('renders ShufflePlayFeature header', () => {
            const wrapper = shallow(<ShufflePlayFeature />);
            expect(wrapper.contains(<h1 className="features-heading">Shuffle play</h1>)).equal(true);
        });
    });
});

