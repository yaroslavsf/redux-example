

import { UserAction, UserActionTypes, UserState } from "../../types/user"

const initialState = {
    loading: false,
    user: {
        login: "",
        created_at: "",
        public_repos: 0,
    },
    error: null
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USER:
            return {
                loading: true,
                user : {
                    login: "",
                    created_at: "",
                    public_repos: 0,
                },
                error: null
            }
        case UserActionTypes.FETCH_USER_SUCCESS:
            return {
                loading: false,
                user : action.payload.user,
                error: null
            }
        case UserActionTypes.FETCH_USER_ERROR:
            return {
                loading: false,
                user : {
                    login: "",
                    created_at: "",
                    public_repos: 0,
                },
                error: action.payload
            }
        default:
            return {
                loading: false,
                user : {
                    login: "",
                    created_at: "",
                    public_repos: 0,
                },
                error: null
            }

    }
}