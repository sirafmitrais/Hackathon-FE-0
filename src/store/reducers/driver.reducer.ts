
import {
    DriverAction
} from '../action-types'

import {
    GET_DETAIL_DRIVER,
    GET_LISTS_DRIVER,
    CREATE_DRIVER,
    UPDATE_DRIVER,
    DELETE_DRIVER
} from '../action/'

const initialState = {
    listDriver: [],
    detailDriver: {},
    updatedDriver: {},
    createdDriver: {},
    createdSuccess: "",
    updatedSucesss: "",
    deleteSuccess: "",

    createFailed: "",
    updateFailed: "",
    deleteFailed: ""

}

const reducer = (state = initialState, action: DriverAction) => {
    switch(action.type){
        case GET_LISTS_DRIVER:
            return {
                ...state,
                ...{listDriver: action.payload}
            };
        case GET_DETAIL_DRIVER:
            return {
                ...state, 
                ...{detailDriver: action.payload}
            };
        case CREATE_DRIVER:
            return {
                ...state, 
                ...{
                    createdDriver: action.payload,
                    createdSuccess: "Success Created"    
                }
            };
        case UPDATE_DRIVER:
            return {
                ...state,
                ...{
                    updatedDriver: action.payload,
                    updatedSuccess: "Success Updated"
                }
            };
        case DELETE_DRIVER:
            return {
                ...state,
                ...{
                    deleteDriver: `Delete Success`
                }
            };
        default:
            return state;
    }
}

export {
    reducer as driverReducer
}