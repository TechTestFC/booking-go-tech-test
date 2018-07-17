import {
    SET_LOCATION_FILTER,
    GET_LOCATIONS,
    GET_LOCATIONS_SUCCESS,
    GET_LOCATIONS_ERROR,
} from './constants';

export const setLocationFilter = (locationFilter) => ({
    type: SET_LOCATION_FILTER,
    locationFilter,
});

export const getLocations = () => ({
  type: GET_LOCATIONS
});

export const getLocationsSuccess = (locations) => ({
    type: GET_LOCATIONS_SUCCESS,
    locations,
});

export const getLocationsError = (error) => ({
    type: GET_LOCATIONS_ERROR,
    error,
});