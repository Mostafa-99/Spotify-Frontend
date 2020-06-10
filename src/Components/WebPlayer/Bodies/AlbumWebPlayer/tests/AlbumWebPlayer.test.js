import React from 'react'
import {shallow} from 'enzyme'
import 'jest-enzyme';
import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import '@testing-library/jest-dom/extend-expect'
import AlbumWebPlayer from './../AlbumWebPlayer.js'
import axios from "axios";
import { responseHandler } from '../../../../../ReduxStore/Shared.js'

configure({ adapter: new Adapter() });

describe('<AlbumWebPlayer/>', () => {

    it('AlbumWebPlayer renders without crashing', () => {
        shallow(<AlbumWebPlayer
            location={{state: {myAlbum: true, myId:"1234"}}}
            />);
    });

    it('AlbumWebPlayer states check', () => {
        
        const wrapper = shallow(<AlbumWebPlayer
            location={{state: {myAlbum: true, myId:"1234"}}}
            />);
        
        expect(wrapper.state().album_name).toEqual("");
        expect(wrapper.state().artists).toEqual("");
        expect(wrapper.state().album_image).toEqual("");
        expect(wrapper.state().playing_song_id).toEqual("");
        expect(wrapper.state().playing_song_name).toEqual("");

        expect(wrapper.state().is_liked).toEqual(false);
        expect(wrapper.state().is_repeating).toEqual(false);
        expect(wrapper.state().is_shuffling).toEqual(false);
        expect(wrapper.state().is_playing).toEqual(false);

        expect(wrapper.state().liked_tracks).toEqual([]);
        expect(wrapper.state().album_total_tracks).toEqual(0);
    });

    it('AlbumWebPlayer page requests', () => {

        const wrapper = shallow(<AlbumWebPlayer
            location={{state: {myAlbum: true, myId:"1234"}}}
            />);
        
        axios.get("http://spotify.mocklab.io/albums/12345",{
            headers:{
                'Content-Type':'application/json',
                'authorization': "Bearer "+ localStorage.getItem("token"),
                "id": ""
            }
        })
        .then(res => {
            if(res.status===200){
                wrapper.setState({
                    album_image:res.data.data.album.image,
                    album_name:res.data.data.album.name,
                    album_total_tracks:res.data.data.album.totalTracks
                })
                res.data.data.album.artists.map((artist)=>(
                    wrapper.setState({
                        artists:artist.name
                    })
                ))
                expect(wrapper.state().album_name).toEqual("Global Warming");
                expect(wrapper.state().artists).toEqual("Pitbull");
            }
            else responseHandler(res);
        })
        .catch(error => {
            console.log(error);
        })

        

        axios.get("http://spotify.mocklab.io/me/likedAlbums",{
            headers:{
                'Content-Type':'application/json',
                'authorization': "Bearer "+ localStorage.getItem("token")
            }
        })
        .then(res => {
            if(res.status===200){
                res.data.data.albums.map((album) => {
                    if(album._id === this.state.myId){
                        this.setState({
                            is_liked:true
                        })

                        expect(wrapper.state().is_liked).toEqual(true); 

                        return album;
                    }
                })
            }
            else responseHandler(res);
        })
        .catch(error => {
            console.log(error);
        })

        axios.get("http://spotify.mocklab.io/albums/12345/tracks",{
            headers:{
                'Content-Type':'application/json',
                'authorization': "Bearer "+ localStorage.getItem("token"),
                "id": ""
            }
        })
        .then(res => {
            if(res.status===200){
                wrapper.setState({tracks:res.data.data.tracksArray})
                expect(wrapper.state().tracks.length).toEqual(5);
            }
            else responseHandler(res);
        })
        .catch(error => {
           console.log(error);
        })

    });

  
});