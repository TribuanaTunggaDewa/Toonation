import {
    GET_ALL_FAVORITES_PENDING,
    GET_ALL_FAVORITES_FULFILLED,
    GET_ALL_FAVORITES_REJECTED
} from '../_redux/types'

export const fetchData = res => {
    return{
        type: GET_ALL_FAVORITES_PENDING,
        payload: res
    }
}

export const fetchDataFulfilled = data => {
    return{
        type: GET_ALL_FAVORITES_FULFILLED,
        payload: data,
        isLoading: false
    }
}

export const fetchDataRejected = data => {
    return{
        type: GET_ALL_FAVORITES_REJECTED,
        payload: 'Request Rejected',
        isLoading: false
    }
}