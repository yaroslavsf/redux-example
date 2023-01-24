export interface ReposState {
    loading: boolean;
    repos: any[];
    error: null | string;
}

export enum ReposActionTypes {
    FETCH_REPOS = "FETCH_REPOS",
    FETCH_REPOS_SUCCESS = "FETCH_REPOS_SUCESS",
    FETCH_REPOS_ERROR = "FETCH_REPOS_ERROR",
}

interface FetchReposAction {
    type: ReposActionTypes.FETCH_REPOS;

}

interface FetchReposSuccessAction {
    type: ReposActionTypes.FETCH_REPOS_SUCCESS;
    payload: {
        repos: any[]
    };
}

interface FetchReposErrorAction {
    type: ReposActionTypes.FETCH_REPOS_ERROR;
    payload: string;
}



export type ReposAction = FetchReposAction | FetchReposSuccessAction | FetchReposErrorAction;
