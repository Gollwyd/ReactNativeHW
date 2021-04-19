import {CHANGE_NAME, CHANGE_AGE} from './types'

export const changeName = (name) => {
    return {
            type: CHANGE_NAME,
            payload: name
        }
    }

export const changeAge = (age) => {
    return {
            type: CHANGE_AGE,
            payload: age
        }
    }
