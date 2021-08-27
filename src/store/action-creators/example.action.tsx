import {
    ListsAction
} from '../action-types'

import {
    GET_LISTS 
} from '../action'

import { 
    ExampleService
} from "../../services/"

type DispatchList = (args: ListsAction) => ListsAction

export const example = () => {
    return (dispatch: DispatchList) => {
        let data = ExampleService.getExample()
        return dispatch({
            type: GET_LISTS,
            payload: data
        })
    }
}