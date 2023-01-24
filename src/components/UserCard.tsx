import { ReposList } from "./ReposList"
import { UserInfo } from "./UserInfo"

export const Card = () => {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center h-50">
                <div className="card">
                    <div className="card-body">
                        <UserInfo/>
                        <ReposList/>
                    </div>
                </div>
            </div>
        </>
    )
}