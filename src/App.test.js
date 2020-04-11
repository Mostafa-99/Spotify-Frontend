import React from 'react';
import { shallow } from 'enzyme';
import App from './App'
import { expect } from 'chai';

/* to be transfered to #src/setupTests.js */

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<App/>', () => {
  it('App renders without crashing', () => {
    shallow(<App/>);
});
});