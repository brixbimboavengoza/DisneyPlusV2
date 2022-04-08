import { FETCH_POPULAR_REQUEST, FETCH_POPULAR_SUCCESS, FETCH_POPULAR_FAILURE } from '../types'

const initialState = {
    loading: false,
    data: [],
    error: ''
}

const popular = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POPULAR_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_POPULAR_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ''
            }
        case FETCH_POPULAR_FAILURE:
            return {
                ...state,
                loading: false,
                data: [],
                error: action.payload
            }    
        default: return state
    }
}

export default popular;