import {
    ShipmentAction
} from '../action-types'

import {
    GET_DETAIL_SHIPMENT,
    GET_LISTS_SHIPMENT,
    CREATE_SHIPMENT,
    UPDATE_SHIPMENT,
    DELETE_SHIPMENT
} from '../action/'

const initialState = {
    listShipemnt: [],
    detailShipemnt: {},
    updatedShipemnt: {},
    createdShipemnt: {},
    createdSuccess: "",
    updatedSucesss: "",
    deleteSuccess: "",

    createFailed: "",
    updateFailed: "",
    deleteFailed: ""

}



const reducer = (state = initialState, action: ShipmentAction) => {
    switch(action.type){
        case GET_LISTS_SHIPMENT:
            return {
                ...state,
                ...{listShipemnt: action.payload}
            };
        case GET_DETAIL_SHIPMENT:
            return {
                ...state, 
                ...{detailShipemnt: action.payload}
            };
        case CREATE_SHIPMENT:
            return {
                ...state, 
                ...{
                    createdShipemnt: action.payload,
                    createdSuccess: "Success Created"    
                }
            };
        case UPDATE_SHIPMENT:
            return {
                ...state,
                ...{
                    updatedShipemnt: action.payload,
                    updatedSuccess: "Success Updated"
                }
            };
        case DELETE_SHIPMENT:
            return {
                ...state,
                ...{
                    deleteShipment: `Delete Success`
                }
            };
        default:
            return state;
    }
}

export {
    reducer as shipmentReducer
}