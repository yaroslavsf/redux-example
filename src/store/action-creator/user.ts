import { Dispatch } from "@reduxjs/toolkit"
import axios from "axios"
import { UserAction, UserActionTypes } from "../../types/user"

//https://api.github.com/users/yaroslavsf
//https://api.github.com/users/yaroslavsf/repos

export const fetchUser = (userName:string) => {
     return async(dispatch : Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USER})
            
            const response = await axios.get(`https://api.github.com/users/${userName}`)
            dispatch({type: UserActionTypes.FETCH_USER_SUCCESS, payload:response.data})
        } catch(e) {
            dispatch({type: UserActionTypes.FETCH_USER_ERROR, payload: 'error while loading user'})
        }
     }
}