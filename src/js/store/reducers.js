import {CHANGE_TERMS} from "../../constants/action-types";

const initialState = {
    searchTerms: []
};


const RootReducer = (state = initialState, action) => {
    //debugger;
    switch (action.type) {
        case CHANGE_TERMS:
            return Object.assign({}, state, {
                searchTerms: action.payload
            });
        default:
            return state
    }
};

export default RootReducer;
