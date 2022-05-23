import { actionTypes } from "../content/action-types"

export const profileSend = (data) =>{
    return{
        type:actionTypes.profile,
        payload:data,
    }
}