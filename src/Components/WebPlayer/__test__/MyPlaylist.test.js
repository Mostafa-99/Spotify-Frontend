import React from 'react';
import { shallow } from 'enzyme';
import MyPlaylist from './../Bodies/MyPlaylist/MyPlaylists.js'
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import Container from 'react-bootstrap/Container'; 
import '@testing-library/jest-dom/extend-expect';
import axios from "axios";

Enzyme.configure({ adapter: new Adapter() });


describe('Add to playlist Test', () => {

    let wrapper;

it('renders without crashing', () => {
    wrapper = Enzyme.shallow(<MyPlaylist/>);
});

it("Snapshot testing", () => {
    const MyPlaylistTest = shallow(
        <MyPlaylist />
    );
    expect(MyPlaylistTest).toMatchInlineSnapshot(`ShallowWrapper {}`);
  });

  it('has the initial state ', () => {
    expect(wrapper.state().playlists).toEqual([]);
    expect(wrapper.state().playlists.length).toEqual(0);
    expect(wrapper.state().isLoading).toEqual(true);
    expect(wrapper.contains(<span class="sr-only">Loading...</span>)).toEqual(true);
  })

  axios.get("https://spotify.mocklab.io/me/createdPlaylists", {
    headers: {
      authorization: "Bearer " + localStorage.getItem("token"),
    },
  })
  .then(res => {
    console.log(res)
  if (res.status===200)
  {       
    this.setState({
        playlists: res.data.data.playlists.map( playlists => ({
        id:playlists._id,
      })),
     isLoading:true
          });
          expect(res.status).toEqual(200);
          expect(wrapper.contains(<span class="sr-only">Loading...</span>)).toEqual(false);
          expect(wrapper.state().playlists.length).notEqual(0);
        }}).catch();


})
