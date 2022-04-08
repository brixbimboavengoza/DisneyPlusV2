import { FETCH_TOPRATED_REQUEST, FETCH_TOPRATED_SUCCESS, FETCH_TOPRATED_FAILURE} from '../types';
import axios from 'axios';

export const fetchTopratedRequest = () => {
    return {
        type: FETCH_TOPRATED_REQUEST,
    }
}

export const fetchTopratedSuccess = toprated => {
    return {
        type: FETCH_TOPRATED_SUCCESS,
        payload: toprated
    }
}

export const fetchTopratedFailure = error => {
    return {
        type: FETCH_TOPRATED_FAILURE,
        payload: error
    }
}

export const fetchTopratedMovies = () => {
    return (dispatch) => {
        dispatch(fetchTopratedRequest)
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
            .then(response => {
                const toprated = response.data.results
                dispatch(fetchTopratedSuccess(toprated))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchTopratedFailure(errorMsg))
            })
    }
}

