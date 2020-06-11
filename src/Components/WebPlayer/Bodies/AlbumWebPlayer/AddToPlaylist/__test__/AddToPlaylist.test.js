import React from 'react';
import { shallow } from 'enzyme';
import AddToPlaylist from './../AddToPlaylist'
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import Container from 'react-bootstrap/Container'; 
import '@testing-library/jest-dom/extend-expect';
import axios from "axios";

Enzyme.configure({ adapter: new Adapter() });


describe('Add to playlist Test', () => {

    let wrapper;

it('renders without crashing', () => {
    wrapper = Enzyme.shallow(<AddToPlaylist/>);
});

it("Snapshot testing", () => {
    const AddToPlaylistTest = shallow(
        <AddToPlaylist />
    );
    expect(AddToPlaylistTest).toMatchInlineSnapshot(`ShallowWrapper {}`);
  });

  it('has the initial state ', () => {
    expect(wrapper.state().playlists).toEqual([]);
    expect(wrapper.state().playlists.length).toEqual(0);
    expect(wrapper.state().isloading).toEqual(true);
    expect(wrapper.state().trackid).toEqual("");
    expect(wrapper.contains(<span class="sr-only">Loading...</span>)).toEqual(true);
  })

  it( 'renders Modal component', () => {  
    expect(wrapper.find('#AddSongToPlaylist')).toHaveLength(1);
   });
   it( 'renders Modal component', () => {  
    expect(wrapper.find('.modal-title')).toHaveLength(1);
   });

   it( 'renders major  elements', () => {  
    // Test whether modal-content element has 3 html children elements.  
    expect(wrapper.find('.modal-content').length).toEqual(1);  
    expect(wrapper.find('.modal-content').children()).toHaveLength(3); 

    expect(wrapper.find('.modal-header').length).toEqual(1);  
  expect(wrapper.find('.modal-header').children()).toHaveLength(1);  

  expect(wrapper.find('.modal-body').length).toEqual(1);  
  expect(wrapper.find('.modal-body').children()).toHaveLength(1); 

  expect(wrapper.find('.modal-footer').length).toEqual(1);  
  expect(wrapper.find('.modal-footer').children()).toHaveLength(1);
   })

  axios
  .get("https://spotify.mocklab.io/me/createdPlaylists", {
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
        title:playlists.name,
        imageUrl:playlists.images[0]
      })),
     isloading:true
          });
          expect(res.status).toEqual(200);
          expect(wrapper.contains(<span class="sr-only">Loading...</span>)).toEqual(false);
          expect(wrapper.state().playlists.length).notEqual(0);
        }}).catch();


})
