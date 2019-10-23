import axios from 'axios'
import {ip} from '../datas/dataIp'

import {
    fetchData,
    fetchDataFulfilled,
    fetchDataRejected
} from '../_actions/toons'


export const getAllToons = () =>{
    return dispatch =>{
        dispatch(fetchData(true))
        axios({
            method: 'GET',
            url: `${ip}/api/v1/webtoons`
        }).then(res => {
            dispatch(fetchDataFulfilled(res.data))
        })
        .catch(err => {
            dispatch(fetchDataRejected(err))
        })
    }
}