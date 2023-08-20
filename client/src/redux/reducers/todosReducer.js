import * as actionTypes from '../actions/type.js'

export const todosReducers = (state = [] , action) => {
    switch(action.type){
        case actionTypes.ADDNEW_TODO:
        return [action.payload, ...state];

        default :
        return state;
    }
};
