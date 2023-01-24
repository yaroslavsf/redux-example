import { ReposAction, ReposActionTypes, ReposState } from "../../types/repos"

const initialState = {
    loading: false,
    repos: [],
    error: null
}

export const reposReducer = (state: ReposState = initialState, action: ReposAction): ReposState => {
    switch (action.type) {
        case ReposActionTypes.FETCH_REPOS:
            return {
                loading: true,
                repos: [],
                error: null
            }
        case ReposActionTypes.FETCH_REPOS_SUCCESS:
            return {
                loading: false,
                repos: action.payload.repos,
                error: null
            }
        case ReposActionTypes.FETCH_REPOS_ERROR:
            return {
                loading: false,
                repos: [],
                error: action.payload
            }
        default:
            return state

    }
}