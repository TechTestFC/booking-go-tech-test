import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

const Container = glamorous.div({
    width: '100%',
    padding: '10px',
    display: 'flex',
});

const LocationType = glamorous.span({
    width: '25%',
    backgroundColor: 'blue',
    color: 'white',
    padding: '5px 2px',
});

const LocationDetailsContainer = glamorous.div({
    width: '75%',
    display: 'flex',
    flexFlow: 'column nowrap',
    padding: '5px',
});

const LocationName = glamorous.h5({});
const LocationRegion = glamorous.span({
    color: 'grey',
});

const PickupLocation = ({ location }) => (
    <Container>
        <LocationType>{location.placeType}</LocationType>
        <LocationDetailsContainer>
            <LocationName>{location.name}</LocationName>
            <LocationRegion>{location.region}</LocationRegion>
        </LocationDetailsContainer>
    </Container>
);

PickupLocation.propTypes = {
    location: PropTypes.object.isRequired,
};

export default PickupLocation;