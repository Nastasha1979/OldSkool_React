import * as ActionTypes from "./ActionTypes";

export const contact = (state = { contact: [] }, action) => {
    switch(action.type) {
        case ActionTypes.GET_CONTACTS: 
            return {...state, contact: action.payload}
        case ActionTypes.POST_CONTACT: 
            const newContact = action.payload;
            newContact.id = state.contact.length;
            console.log(newContact);
            return{...state, contact: state.contact.concat(newContact)};
        default:
            return state;
    }
};