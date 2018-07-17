import { createSelector } from 'reselect';

export const domainSelector = (state) => state;

export const makeSelectLocationFilter = createSelector(
    domainSelector,
    (state) => state.locationFilter
);

export const makeSelectLocations = createSelector(
    domainSelector,
    (state) => state.locations
);

export const makeSelectIsLoadingLocations = createSelector(
    domainSelector,
    (state) => state.isLoadingLocations
);