import { DriverAction } from "../action-types";

import { 
    GET_LISTS_DRIVER,
    GET_DETAIL_DRIVER,
    CREATE_DRIVER,
    UPDATE_DRIVER,
    DELETE_DRIVER
} from "../action";

import { DriverService } from "../../services/";

type DispatchList = (args: DriverAction) => DriverAction;

export const getDriverList = () => {
  return (dispatch: DispatchList) => {
    return DriverService.getAllDriver()
        .then((response) => {
            dispatch({
                type: GET_LISTS_DRIVER,
                payload: response
            })
        })
  };
};

export const getDetailDriver = (id: string) => {
    return (dispatch: DispatchList) => {
        return DriverService.getDetailDriver(id)
            .then((response) => {
                dispatch({
                    type: GET_DETAIL_DRIVER,
                    payload: "response"
                })
            })
    };
};

export const createDriver = (dataDriver: string) => {
    return (dispatch: DispatchList) => {
        return DriverService.createDriver(dataDriver)
            .then((response) => {
                dispatch({
                    type: CREATE_DRIVER,
                    payload: "response"
                })
            })
    };
};

export const updateDriver = (id: string, dataUpdate: string) => {
    return (dispatch: DispatchList) => {
        return DriverService.updateDriver(id, dataUpdate)
            .then((response) => {
                dispatch({
                    type: UPDATE_DRIVER,
                    payload: "response"
                })
            })
    };
};

export const deleteDriver = (id: string) => {
    return (dispatch: DispatchList) => {
        return DriverService.deleteDriver(id)
            .then((response) => {
                dispatch({
                    type: DELETE_DRIVER,
                    payload: "response"
                })
            })
    }
}
