import {
    ListsAction,
    exampleState
} from '../action-types'

import {
    GET_LISTS
} from '../action'

const initialStateExample: exampleState = {
    name: "",
    job: ""
}

const reducer = (state = initialStateExample, action: ListsAction) => {
    switch(action.type){
        case GET_LISTS:
            return {
                ...state
            }
    }
}

export {
    reducer as exampleReducer
}
