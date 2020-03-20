import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components'
import '../Button/spotify_button.css'
import PropTypes from 'prop-types'

const spotify_button = ({value,onClick}) => {
        return(
        <button class="myspotifybutton"  onClick={(event: MouseEvent <HTMLButtonElement>)=>onClick(event)}>
        {value}
        </button>
        );
};

Button.prototype={
    value:PropTypes.string.isRequired,
    onClick:PropTypes.func.isRequired
};

export default spotify_button;