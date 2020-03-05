import {
    ADD_TODO,
    COMPLETED_TODO,
    CLEAR_TODO
} from './types'

export default (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todo: action.payload
            }
            default:
      return state;
    }
    
}