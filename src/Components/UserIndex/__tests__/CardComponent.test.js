import React from 'react';
import { shallow } from 'enzyme';
import CardComponent from '../CardComponent';
import { MemoryRouter } from "react-router-dom";
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import axios from 'axios';

Enzyme.configure({ adapter: new Adapter() });
jest.mock('CardComponent');


describe('CardComponent Test', () => {

  let wrapper;

it('renders without crashing', () => {
  wrapper = Enzyme.shallow(<CardComponent />);
});

it('has the initial state of emptyy array', () => {
  expect(wrapper.state()).toEqual({"playlists":[]});
})

it("Snapshot testing", () => {
    const CardTest = shallow(
      <MemoryRouter>
        <CardComponent />
      </MemoryRouter>
    );
    expect(CardTest).toMatchInlineSnapshot(`ShallowWrapper {}`);
  });

  describe('when rendered', () => {
    it('should fetch a list of tracks', () => {
      const getSpy = jest.spyOn(axios, 'get');
      const toDoListInstance = shallow(
        <CardComponent/>
      );
      expect(getSpy).toBeCalled();
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  
})