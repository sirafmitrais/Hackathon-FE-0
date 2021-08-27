import {
    GET_LISTS
} from '../action'

export interface GetAction {
    type: typeof GET_LISTS;
    payload: string
}

export type ListsAction = GetAction
