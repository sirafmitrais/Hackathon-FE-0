import { TruckAction } from "../action-types";

import { 
    GET_LISTS_TRUCK,
    GET_DETAIL_TRUCK,
    CREATE_TRUCK,
    UPDATE_TRUCK,
    DELETE_TRUCK
} from "../action";


import TruckService from "../../services/api/Truck.service";

type DispatchList = (args: TruckAction) =>  TruckAction;


export const getTruckList = () => {
    return (dispatch: DispatchList) => {
      return TruckService.getAllTruck()
          .then((response) => {
              dispatch({
                  type: GET_LISTS_TRUCK,
                  payload: response
              })
          })
    };
  };
  
  export const getDetailDriver = (id: string) => {
      return (dispatch: DispatchList) => {
          return TruckService.getDetailTruck(id)
              .then((response) => {
                  dispatch({
                      type: GET_DETAIL_TRUCK,
                      payload: "response"
                  })
              })
      };
  };
  
  export const createDriver = (dataTruck: string) => {
      return (dispatch: DispatchList) => {
          return TruckService.createTruck(dataTruck)
              .then((response) => {
                  dispatch({
                      type: CREATE_TRUCK,
                      payload: "response"
                  })
              })
      };
  };
  
  export const updateDriver = (id: string, dataUpdate: string) => {
      return (dispatch: DispatchList) => {
          return TruckService.updateTruck(id, dataUpdate)
              .then((response) => {
                  dispatch({
                      type: UPDATE_TRUCK,
                      payload: "response"
                  })
              })
      };
  };
  
  export const deleteDriver = (id: string) => {
      return (dispatch: DispatchList) => {
          return TruckService.deleteTruck(id)
              .then((response) => {
                  dispatch({
                      type: DELETE_TRUCK,
                      payload: "response"
                  })
              })
      }
  }