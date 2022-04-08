import { FETCH_TOPRATED_REQUEST, FETCH_TOPRATED_SUCCESS, FETCH_TOPRATED_FAILURE } from '../types'

const initialState = {
    loading: false,
    data: [],
    error: ''
}

const toprated = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TOPRATED_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_TOPRATED_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ''
            }
        case FETCH_TOPRATED_FAILURE:
            return {
                ...state,
                loading: false,
                data: [],
                error: action.payload
            }    
        default: return state
    }
}

export default toprated;