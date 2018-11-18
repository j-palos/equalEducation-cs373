import {CHANGE_TERMS} from "../../constants/action-types";

export const changeTerms = term => ({type: CHANGE_TERMS, payload: term.split(' ')});


