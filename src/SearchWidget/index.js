import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import PickupLocationList from './PickupLocationList';

const SearchWidgetContainer = glamorous.div({
    display: 'block',
    backgroundColor: '#f3ce56',
    fontFamily: 'Arial, Helvetica, sans-serif',
    padding: '20px',
    width: '50%',
    margin: 'auto',
});

export const SearchWidgetTitle = glamorous.h2({});

export const PickupLocationLabel = glamorous.label({
  fontSize: '15px',
  color: '#444',
  display: 'block',
  padding: '0 0 4px',
});

export const PickupLocationInput = glamorous.input({
  backgroundColor: 'white',
  width: '100%',
  padding: '5px',
});

const SearchWidget = ({
    locationFilter,
    locations,
    isLoadingLocations,
    onPickupLocationChange
}) => (
  <SearchWidgetContainer>
    <SearchWidgetTitle>Where are you going?</SearchWidgetTitle>
    <PickupLocationLabel htmlFor="pickup-input">
      Pick-up Location
    </PickupLocationLabel>
    <PickupLocationInput
      id="pickup-input"
      placeholder="city, airport, station, region and district..."
      value={locationFilter}
      onChange={(event) => onPickupLocationChange(event.target.value)}
    />
    {
        isLoadingLocations
            ? <span>Loading...</span>
            : <PickupLocationList locations={locations} />
    }
  </SearchWidgetContainer>
);

SearchWidget.propTypes = {
    locationFilter: PropTypes.string,
    locations: PropTypes.array.isRequired,
    isLoadingLocations: PropTypes.bool.isRequired,
    onPickupLocationChange: PropTypes.func.isRequired,
};

export default SearchWidget;
