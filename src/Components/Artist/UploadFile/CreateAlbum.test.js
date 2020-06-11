import React from 'react'
import {shallow} from 'enzyme'
import 'jest-enzyme';
import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import '@testing-library/jest-dom/extend-expect';
import CreateAlbum from './CreateAlbum';
configure({ adapter: new Adapter() });

describe('<CreateAlbum/>', () => {

    it('Albums renders without crashing', () => {
        shallow(<CreateAlbum/>);
    });  
});