import { FETCH_POPULAR_REQUEST, FETCH_POPULAR_SUCCESS, FETCH_POPULAR_FAILURE} from '../types';
import axios from 'axios';

export const fetchPopularRequest = () => {
    return {
        type: FETCH_POPULAR_REQUEST,
    }
}

export const fetchPopularSuccess = popular => {
    return {
        type: FETCH_POPULAR_SUCCESS,
        payload: popular
    }
}

export const fetchPopularFailure = error => {
    return {
        type: FETCH_POPULAR_FAILURE,
        payload: error
    }
}

export const fetchPopularMovies = () => {
    return (dispatch) => {
        dispatch(fetchPopularRequest)
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
            .then(response => {
                const popular = response.data.results
                dispatch(fetchPopularSuccess(popular))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchPopularFailure(errorMsg))
            })
    }
}

