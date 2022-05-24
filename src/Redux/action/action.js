import { actionTypes } from "../content/action-types"

export const profileSend = (data) =>{
    return{
        type:actionTypes.profile,
        payload:data,
    }
}
export const logout = () =>{
    return{
        type:actionTypes.logout,
    }
}
export const profileEdit = (data) =>{
    return{
        type:actionTypes.profileEdit,
        payload:data,
    }
}