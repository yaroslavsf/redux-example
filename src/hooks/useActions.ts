import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import ActionCreator from '../store/action-creator/index'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ActionCreator, dispatch)
}