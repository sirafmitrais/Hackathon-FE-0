import {
    GET_LISTS_TRUCK,
    GET_DETAIL_TRUCK,
    CREATE_TRUCK,
    UPDATE_TRUCK, 
    DELETE_TRUCK
    
} from '../action'

export interface GetAllActionTruck {
    type: typeof GET_LISTS_TRUCK;
    payload: any
}

export interface GetDetailActionTruck {
    type: typeof GET_DETAIL_TRUCK;
    payload: string
}

export interface CreateActionTruck {
    type: typeof CREATE_TRUCK;
    payload: string
}

export interface UpdateActionTruck {
    type: typeof UPDATE_TRUCK;
    payload: string
}

export interface DeleteActionTruck {
    type: typeof DELETE_TRUCK;
    payload: string
}

export type TruckAction = GetAllActionTruck | GetDetailActionTruck | CreateActionTruck | UpdateActionTruck  | DeleteActionTruck
