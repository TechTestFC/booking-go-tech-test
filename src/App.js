import React, {Component} from 'react';
import axios from 'axios';
import SearchWidget from './SearchWidget'
import { getLocationsReadableFormat } from './utils/locations-utils';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locationFilter: '',
            locations: [],
            isLoadingLocations: false,
        };
    }

    getLocations(locationFilter) {
        this.setState({ isLoadingLocations: true });
        const numberOfResults = 6;
        const url = `https://cors.io/?https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=${numberOfResults}&solrTerm=${locationFilter}`
        axios.get(url)
            .then((response) => {
                const locations = getLocationsReadableFormat(response.data.results.docs);
                this.setState({locations, isLoadingLocations: false });
            })
            .catch(() => {
                this.setState({locations: [], isLoadingLocations: false });
            });
    }

    onPickupLocationChange(locationFilter) {
        if (locationFilter.length > 1) {
            // debounce
            if (this.state.locationQueryTimeoutId) {
                clearTimeout(this.state.locationQueryTimeoutId);
            }
            const locationQueryTimeoutId = setTimeout(() => { this.getLocations(locationFilter); }, 500);
            this.setState({locationQueryTimeoutId});
        } else {
            this.setState({locations:[]});
        }
        this.setState({locationFilter});
    }

    render() {
        return (
            <div className="App">
                <SearchWidget
                    locationFilter={this.state.locationFilter}
                    locations={this.state.locations}
                    isLoadingLocations={this.state.isLoadingLocations}
                    onPickupLocationChange={(location) => this.onPickupLocationChange(location)}
                />
            </div>
        );
    }
}

export default App;
