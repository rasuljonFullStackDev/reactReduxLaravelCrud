import { actionTypes } from "../content/action-types";
const initialState = {
    profile:JSON.parse(localStorage.getItem('profile')) || null,
    data:[],
    key:"AIzaSyBYXm2jsrRlsvubN8vAB-RQf9DNgYKNmfM"  
}


export const rootReducers = (state=initialState,{type,payload}) =>{
    switch (type) {
        case actionTypes.profile:
            localStorage.setItem('profile',JSON.stringify(payload))
            return {
                ...state,
                profile:JSON.parse(localStorage.getItem("profile"))
            };
        case actionTypes.logout: 
        localStorage.clear()
        return{
            ...state,
            profile:null
        }
        case actionTypes.profileEdit: 
        let profileEdit = {...state.profile.user,img:payload};
        localStorage.setItem('profile',JSON.stringify({...state.profile,user:profileEdit}))
        return{
            ...state,
            profile:JSON.parse(localStorage.getItem("profile"))
        }
            break;
    
        default: return state;
            break;
    }
}