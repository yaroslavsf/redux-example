interface UserInfo {
    login: string;
    created_at: string;
    public_repos: number;
}

export interface UserState {
    loading: boolean;
    user: UserInfo;
    error: null | string
}

export enum UserActionTypes {
    FETCH_USER = "FETCH_USER",
    FETCH_USER_SUCCESS = "FETCH_USER_SUCESS",
    FETCH_USER_ERROR = "FETCH_USER_ERROR",
}

interface FetchUserAction {
    type: UserActionTypes.FETCH_USER;

}

interface FetchUserSuccessAction {
    type: UserActionTypes.FETCH_USER_SUCCESS;
    payload: {
        user: UserInfo,
    };
}

interface FetchUserErrorAction {
    type: UserActionTypes.FETCH_USER_ERROR;
    payload: string;
}



export type UserAction = FetchUserAction | FetchUserSuccessAction | FetchUserErrorAction;
