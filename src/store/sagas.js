import axios from 'axios';
import { delay } from 'redux-saga';
import { call, select, put, takeLatest } from 'redux-saga/effects'
import { getLocationsReadableFormat } from '../utils/locations-utils';
import { getLocationsSuccess, getLocationsError } from './actions';
import { GET_LOCATIONS } from './constants';
import { makeSelectLocationFilter } from './selectors';

const fetchLocations = (locationFilter, numberOfResults = 6) => {
    const url = `https://cors.io/?https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=${numberOfResults}&solrTerm=${locationFilter}`
    return axios.get(url)
        .then((response) => getLocationsReadableFormat(response.data.results.docs))
        .catch((error) => { throw error; });
};

function* getLocations() {
    yield call(delay, 500); // debounce because takeLatest will cancel any pending getLocations saga
    const locationFilter = yield select(makeSelectLocationFilter);
    if (locationFilter.length < 2) {
        yield put(getLocationsSuccess([]));
        return;
    }
    try {
        const locations = yield call(fetchLocations, locationFilter);
        console.log(locations);
        yield put(getLocationsSuccess(locations));
    } catch (error) {
        yield put(getLocationsError(error));
    }
}

export default function* rootSaga() {
    yield takeLatest(GET_LOCATIONS, getLocations);
}