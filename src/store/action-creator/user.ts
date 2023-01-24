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
            
            dispatch({type: UserActionTypes.FETCH_USER_SUCCESS, payload: 
            {
                login: response.data.login,
                created_at: response.data.created_at,
                public_repos: response.data.public_repos,
                avatar_url: response.data.avatar_url,
            } })
            
        } catch(e) {
            dispatch({type: UserActionTypes.FETCH_USER_ERROR, payload: 'error while loading user'})
        }
     }
}