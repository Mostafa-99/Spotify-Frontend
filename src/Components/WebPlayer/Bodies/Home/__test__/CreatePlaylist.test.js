import React from 'react';
import { shallow } from 'enzyme';
import CreatePlaylist from './../CreatePlaylist/CreatePlaylist.js'
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import Container from 'react-bootstrap/Container'; 
import '@testing-library/jest-dom/extend-expect';
import axios from "axios";

Enzyme.configure({ adapter: new Adapter() });


describe('Add to playlist Test', () => {

    let wrapper;

it('renders without crashing', () => {
    wrapper = Enzyme.shallow(<CreatePlaylist/>);
});

it('has the initial state ', () => {
    expect(wrapper.state().playlistname).toEqual("");
    })

test('playlistname check',()=>
{
wrapper = shallow(<CreatePlaylist/>);
wrapper.find('input[type="text"]').simulate('change', {target: {name: 'playlistname', value: 'AmrDiab'}});
expect(wrapper.state('playlistname')).toEqual('AmrDiab');
})

it("Snapshot testing", () => {
    const CreatePlaylistTest = shallow(
        <CreatePlaylist />
    );
    expect(CreatePlaylistTest).toMatchInlineSnapshot(`ShallowWrapper {}`);
  });

  it('has the final  state ', () => {
    expect(wrapper.state().playlistname).toEqual("AmrDiab");
    })


  it( 'renders Modal component', () => {  
    expect(wrapper.find('#static-back-drop')).toHaveLength(1);
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
  expect(wrapper.find('.modal-footer').children()).toHaveLength(2);
   })
  
   axios .post("https://spotify.mocklab.io/users/playlists", 
            {
            "name":"AmrDiab"
            },
        {
            headers: {
            'authorization': "Bearer " + localStorage.getItem("token"),
          }})
   .then(res => {
     console.log(res)
   if (res.status===200)
   {       expect(wrapper.state().playlistname).toEqual("AmrDiab");
           expect(res.status).toEqual(200);
         }}).catch();

})
