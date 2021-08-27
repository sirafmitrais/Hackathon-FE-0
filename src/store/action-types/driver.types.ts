import {
    GET_LISTS_DRIVER,
    GET_DETAIL_DRIVER,
    CREATE_DRIVER,
    UPDATE_DRIVER, 
    DELETE_DRIVER
    
} from '../action'

export interface GetAllAction {
    type: typeof GET_LISTS_DRIVER;
    payload: string
}

export interface GetDetailAction {
    type: typeof GET_DETAIL_DRIVER;
    payload: string
}

export interface CreateAction {
    type: typeof CREATE_DRIVER;
    payload: string
}

export interface UpdateAction {
    type: typeof UPDATE_DRIVER;
    payload: string
}

export interface DeleteAction {
    type: typeof DELETE_DRIVER;
    payload: string
}

export type DriverAction = GetAllAction | GetDetailAction | CreateAction | UpdateAction  | DeleteAction
