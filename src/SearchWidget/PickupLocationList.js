import React from 'react';
import PropTypes from 'prop-types';
import PickupLocation from './PickupLocation';

const PickupLocationList = ({ locations }) => {
    const locationList = locations.map((location) => <PickupLocation location={location} />);
    return <div>{locationList}</div>;
};

PickupLocationList.propTypes = {
    locations: PropTypes.array.isRequired,
};

export default PickupLocationList;