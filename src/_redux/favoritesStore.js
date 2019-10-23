import axios from 'axios'
import {ip} from '../datas/dataIp'

import{
    fetchData,
    fetchDataFulfilled,
    fecthDataRejected
} from '../_actions/favorites'

export const getAllFavorites = () =>{
    return dispatch => {
        dispatch(fetchData(true))
        axios({
            method: 'GET',
            url: `${ip}/api/v1/user/1/favorites`
        }).then(res => {
            dispatch(fetchDataFulfilled(res.data))
        })
        .catch(err => {
            dispatch(fecthDataRejected(err))
        })
    }
}