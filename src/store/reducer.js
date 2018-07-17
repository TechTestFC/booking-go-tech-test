import {
    SET_LOCATION_FILTER,
    GET_LOCATIONS,
    GET_LOCATIONS_SUCCESS,
    GET_LOCATIONS_ERROR,
} from './constants';

const initialState = {
    locationFilter: '',
    locations: [],
    isLoadingLocations: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_LOCATION_FILTER:
            return {
                ...state,
                locationFilter: action.locationFilter,
            };

        case GET_LOCATIONS:
            return {
                ...state,
                isLoadingLocations: true,
            };

        case GET_LOCATIONS_SUCCESS:
            return {
                ...state,
                locations: action.locations,
                isLoadingLocations: false,
            };

        case GET_LOCATIONS_ERROR:
            return {
                ...state,
                locations: [],
                isLoadingLocations: false,
            };

        default:
            return state;
    }
};

export default reducer;