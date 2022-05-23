import { actionTypes } from "../content/action-types";
const initialState = {
    profile:JSON.parse(localStorage.getItem('profile')) || '',
    data:[]
}


export const rootReducers = (state=initialState,{type,payload}) =>{
    switch (type) {
        case actionTypes.profile:
            localStorage.setItem('profile',JSON.stringify(payload))
            return {
                ...state,
                profile:JSON.parse(localStorage.getItem('profile'))
            };
            
            break;
    
        default: return state;
            break;
    }
}