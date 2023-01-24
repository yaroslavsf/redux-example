import { combineReducers } from "@reduxjs/toolkit";
import { reposReducer } from "./reposReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers(
    {
        user: userReducer,
        repos: reposReducer
    }
)

export type RootState = ReturnType<typeof rootReducer>