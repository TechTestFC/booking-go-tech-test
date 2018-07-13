const locationTypeMapper = {
    A: 'Airport',
    C: 'City',
    T: 'Station',
};

const formatLocationName = (location) => {
    if (location.iata) {
        return `${location.name} (${location.iata})`;
    }
    return location.name;
}
export const getLocationsReadableFormat = (locations = []) => locations.map((location) => ({
    name: formatLocationName(location),
    region: location.region,
    placeType: locationTypeMapper[location.placeType] || '?',
}));