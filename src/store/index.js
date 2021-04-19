import {combineReducers, createStore} from 'redux'
import {CHANGE_NAME, CHANGE_AGE} from './types'



const initialState = {
    name: 'Viktor',
    age: 26
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_NAME: return {...state, name: action.payload}
        case CHANGE_AGE: return {...state, age: action.payload}
        default: return state
    }
}

export default createStore(reducer, initialState);