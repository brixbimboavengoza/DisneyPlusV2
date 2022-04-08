import { FETCH_UPCOMING_REQUEST, FETCH_UPCOMING_SUCCESS, FETCH_UPCOMING_FAILURE} from '../types';
import axios from 'axios';

export const fetchUpcomingRequest = () => {
    return {
        type: FETCH_UPCOMING_REQUEST,
    }
}

export const fetchUpcomingSuccess = upcoming => {
    return {
        type: FETCH_UPCOMING_SUCCESS,
        payload: upcoming
    }
}

export const fetchUpcomingFailure = error => {
    return {
        type: FETCH_UPCOMING_FAILURE,
        payload: error
    }
}

export const fetchUpcomingMovies = () => {
    return (dispatch) => {
        dispatch(fetchUpcomingRequest)
        axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
            .then(response => {
                const upcoming = response.data.results
                dispatch(fetchUpcomingSuccess(upcoming))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchUpcomingFailure(errorMsg))
            })
    }
}

