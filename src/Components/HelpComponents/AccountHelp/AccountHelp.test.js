import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import AccountHelp from './AccountHelp';
import SpotifyAndFacebook from './Articles/SpotifyAndFacebook'
import HowToLogOut from './Articles/HowToLogOut'
import CanNotActivatePremiumTrial from './Articles/CanNotActivatePremiumTrial'
import ChangeEmailAddress from './Articles/ChangeEmailAddress'
import ProfilePicture from './Articles/ProfilePicture'


/* to be transfered to #src/setupTests.js */

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('<AccountHelp />', () => {

    it('AccountHelp renders without crashing', () => {
        shallow(<AccountHelp />);
    });
    it('renders Account Help header', () => {
        const wrapper = shallow(<AccountHelp />);
        // expect(wrapper.contains(welcome)).toBe(true);
        //expect(wrapper).toContainReact(help);
        expect(wrapper.contains(<h1 id="help-arts-headers">Account Help</h1>)).equal(true);
    });
    it('does not render Feature header', () => {
        const wrapper = shallow(<AccountHelp />);
        // expect(wrapper.contains(welcome)).toBe(true);
        //expect(wrapper).toContainReact(help);
        expect(wrapper.contains(<h1 className="features-heading">Features</h1>)).equal(false);
    });
});


describe(' \n Account Help Articles: \n ----------------------', () => {

    describe('<SpotifyAndFacebook />', () => {

        it('SpotifyAndFacebook renders without crashing', () => {
            shallow(<SpotifyAndFacebook />);
        });
        it('renders SpotifyAndFacebook header', () => {
            const wrapper = shallow(<SpotifyAndFacebook />);
            // expect(wrapper.contains(welcome)).toBe(true);
            //expect(wrapper).toContainReact(help);
            expect(wrapper.contains(<h1 id="first-header-art">Spotify and Facebook</h1>)).equal(true);
        });
    });

    describe('<ChangeEmailAddress />', () => {

        it('ChangeEmailAddress renders without crashing', () => {
            shallow(<ChangeEmailAddress />);
        });
        it('renders ChangeEmailAddress header', () => {
            const wrapper = shallow(<ChangeEmailAddress />);
            // expect(wrapper.contains(welcome)).toBe(true);
            //expect(wrapper).toContainReact(help);
            expect(wrapper.contains(<h1 id="first-header-art">Change email address</h1>)).equal(true);
        });
    });

    describe('<HowToLogOut />', () => {

        it('HowToLogOut renders without crashing', () => {
            shallow(<HowToLogOut />);
        });
        it('renders HowToLogOut header', () => {
            const wrapper = shallow(<HowToLogOut />);
            // expect(wrapper.contains(welcome)).toBe(true);
            //expect(wrapper).toContainReact(help);
            expect(wrapper.contains(<h1 id="first-header-art">How to log out</h1>)).equal(true);
        });
    });

    describe('<ProfilePicture />', () => {

        it('ProfilePicture renders without crashing', () => {
            shallow(<ProfilePicture />);
        });
        it('renders ProfilePicture header', () => {
            const wrapper = shallow(<ProfilePicture />);
            // expect(wrapper.contains(welcome)).toBe(true);
            //expect(wrapper).toContainReact(help);
            expect(wrapper.contains(<h1 id="first-header-art">Profile picture</h1>)).equal(true);
        });
    });

    describe('<CanNotActivatePremiumTrial />', () => {

        it('CanNotActivatePremiumTrial renders without crashing', () => {
            shallow(<CanNotActivatePremiumTrial />);
        });
        it('renders CanNotActivatePremiumTrial header', () => {
            const wrapper = shallow(<CanNotActivatePremiumTrial />);
            // expect(wrapper.contains(welcome)).toBe(true);
            //expect(wrapper).toContainReact(help);
            expect(wrapper.contains(<h1 id="first-header-art">Can't activate Premium trial</h1>)).equal(true);
        });
    });
});

