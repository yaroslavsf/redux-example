import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useTypedSelector } from "../hooks/UseTypedSelectors"
import { fetchUser } from "../store/action-creator/user"
import { ReposList } from "./ReposList"
import { UserInfo } from "./UserInfo"

export const Card = () => {

    const { user } = useTypedSelector(state => state.user)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUser("yaroslavsf") as any)
    }, [])

    console.log(user)

    return (
        <>
            
            <div className="d-flex justify-content-center align-items-center h-50">

                <div className="card">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <UserInfo />
                        <ReposList />
                    </div>
                </div>

            </div>
        </>
    )
}