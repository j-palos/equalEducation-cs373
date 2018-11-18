const initialState = {
    searchTerms: []
};

export const CHANGE_TERMS = 'actions/CHANGE';

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_TERMS:
            return {
                ...state,
                searchTerms: [...state.searchTerms, action.payload],
                isIncrementing: !state.isIncrementing
            };

        default:
            return state
    }


    export const increment = () => {
        return dispatch => {
            dispatch({
                type: INCREMENT_REQUESTED
            })

            dispatch({
                type: INCREMENT
            })
        }
    }