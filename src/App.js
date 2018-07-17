import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import SearchWidget from './SearchWidget'
import {
    makeSelectLocationFilter,
    makeSelectLocations,
    makeSelectIsLoadingLocations,
} from './store/selectors';

import {
    setLocationFilter,
    getLocations,
} from './store/actions';

class App extends Component {

    onPickupLocationChange(locationFilter) {
        this.props.setLocationFilter(locationFilter);
        this.props.getLocations();
    }

    render() {
        return (
            <div className="App">
                <SearchWidget
                    locationFilter={this.props.locationFilter}
                    locations={this.props.locations}
                    isLoadingLocations={this.props.isLoadingLocations}
                    onPickupLocationChange={(location) => this.onPickupLocationChange(location)}
                />
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    locationFilter: makeSelectLocationFilter,
    locations: makeSelectLocations,
    isLoadingLocations: makeSelectIsLoadingLocations,
});

const mapDispatchToProps = (dispatch) => ({
    setLocationFilter: (locationFilter) => dispatch(setLocationFilter(locationFilter)),
    getLocations: () => dispatch(getLocations()),
});

App.propTypes = {
    locationFilter: PropTypes.string.isRequired,
    locations: PropTypes.array.isRequired,
    isLoadingLocations: PropTypes.bool.isRequired,
    setLocationFilter: PropTypes.func.isRequired,
    getLocations: PropTypes.func.isRequired,
};

const connectedApp = connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);

export default connectedApp;
