import { TruckAction } from '../action-types';
import {
    GET_DETAIL_TRUCK,
    GET_LISTS_TRUCK,
    CREATE_TRUCK,
    UPDATE_TRUCK,
    DELETE_TRUCK
} from '../action/'

const initialState = {
    listTruck: [],
    detailTruck: {},
    updatedTruck: {},
    createdTruck: {},
    createdSuccess: "",
    updatedSucesss: "",
    deleteSuccess: "",

    createFailed: "",
    updateFailed: "",
    deleteFailed: ""

}

const reducer = (state = initialState, action: TruckAction) => {
    switch(action.type){
        case GET_LISTS_TRUCK:
            return {
                ...state,
                ...{listTruck: action.payload}
            };
        case GET_DETAIL_TRUCK:
            return {
                ...state, 
                ...{detailTruck: action.payload}
            };
        case CREATE_TRUCK:
            return {
                ...state, 
                ...{
                    createdTruck: action.payload,
                    createdSuccess: "Success Created"    
                }
            };
        case UPDATE_TRUCK:
            return {
                ...state,
                ...{
                    updatedTruck: action.payload,
                    updatedSuccess: "Success Updated"
                }
            };
        case DELETE_TRUCK:
            return {
                ...state,
                ...{
                    deleteTRUCK: `Delete Success`
                }
            };
        default:
            return state;
    }
}

export {
    reducer as TruckReducer
}