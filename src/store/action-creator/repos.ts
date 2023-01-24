import { Dispatch } from "@reduxjs/toolkit"
import axios from "axios"
import { ReposAction, ReposActionTypes } from "../../types/repos"

export const fetchRepos = (userName:string) => {
     return async(dispatch : Dispatch<ReposAction>) => {
        try {
            dispatch({type: ReposActionTypes.FETCH_REPOS})
            const response = await axios.get(`https://api.github.com/users/${userName}/repos`)

            dispatch({type: ReposActionTypes.FETCH_REPOS_SUCCESS, payload: {repos:
                response.data.map(({ name, html_url }:any) => ({ name, html_url }))
            }
         })
        } catch(e) {
            dispatch({type: ReposActionTypes.FETCH_REPOS_ERROR, payload: 'error while loading repos'})
        }
     }
}