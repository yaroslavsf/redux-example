

import { UserAction, UserActionTypes, UserState } from "../../types/user"

const initialState = {
    loading: false,
        login: "",
        created_at: "",
        public_repos: 0,
        avatar_url: "",
    error: null
}

export const userReducer = (state:UserState = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USER:
            return {
                loading: true,
                login: "",  
                created_at: "",
                public_repos: 0,
                avatar_url: "",
                error: null
            }
        case UserActionTypes.FETCH_USER_SUCCESS:
            return {
                loading: false,
                login: action.payload.login,
                created_at: action.payload.created_at,
                public_repos: action.payload.public_repos,
                avatar_url:action.payload.avatar_url,
                error: null
            }
        case UserActionTypes.FETCH_USER_ERROR:
            return {
                loading: false,

                login: "",
                created_at: "",
                public_repos: 0,
                avatar_url: "",
                error: action.payload
            }
        default:
            return state;

    }
}