import React from 'react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import CreatePlaylist from '../CreatePlaylist';

Enzyme.configure({ adapter: new Adapter() });



describe('Recent Activity Test', () => {

    let wrapper;

it('renders without crashing', () => {
    wrapper = Enzyme.shallow(<CreatePlaylist />);
});

it("Snapshot testing", () => {
    const CreatePlaylistTest = shallow(
         <CreatePlaylist />
    );
    expect (CreatePlaylistTest).toMatchInlineSnapshot(`ShallowWrapper {}`);
  });

  it('has the initial state name to be "" ', () => {
    expect(wrapper.state()).toEqual({'playlistname':""});
  })
})