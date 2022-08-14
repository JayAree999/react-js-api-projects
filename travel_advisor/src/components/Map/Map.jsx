import React from 'react';
import {Paper, Typography, useMediaQuery} from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';
import GoogleMapReact from 'google-map-react';

import useStyles from './style';

const Map = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)')
    const coordinates = { lat : 0, lng :0 }
    return (
        <div className='classes.mapContainer'>
            <GoogleMapReact
                bootstrapURLKeys={{ key : 'AIzaSyDehivwxfWO_IWqPnUtM2N82Pj7gqn4Bc8'}} // 
                defaultCenter={coordinates}
                center = {coordinates} // current center of the map 
                defaultZoom={14}
                margin={[50,50,50,50]}
                options = {''}
                onChange={''}
                onChildClick={''}
                
            >

            </GoogleMapReact>
        </div>
   
    );
}

export default Map; 