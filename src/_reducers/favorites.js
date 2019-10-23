import { GET_ALL_FAVORITES_PENDING,
         GET_ALL_FAVORITES_FULFILLED, 
         GET_ALL_FAVORITES_REJECTED 
} from '../_redux/types'


const initialState = {
    favorites: [],
    error: null,
    isLoading: true
}

const favorites = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_FAVORITES_PENDING:
            return{
                ...state,
                isLoading: action.payload
            }
        case GET_ALL_FAVORITES_FULFILLED:
            return{
                ...state,
                favorites: action.payload,
                isLoading: action.isLoading
            }
        case GET_ALL_FAVORITES_REJECTED:
            return{
                ...state,
                error: action.payload,
                isLoading: action.isLoading
            }
        default:
            return state
    }
}

export default favorites