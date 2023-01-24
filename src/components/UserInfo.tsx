import { useTypedSelector } from "../hooks/UseTypedSelectors";

export const UserInfo = () => {
    const { login, created_at, public_repos, loading, avatar_url } = useTypedSelector(state => state.user)
    return (
        <>  
          {
            !loading
            ?
            (
                <>
            <div className="d-flex align-items-center"><img src={`${avatar_url }`} className="w-25 card-img-top" alt="..." /></div>
            <p className="card-text">Name: {login}</p>
            <p className="card-text">Created at: {created_at}</p>
            <p className="card-text">Repos: {public_repos}</p> 
                </>
            )
            :
                <p>loading user info...</p>
          }
               
           

        </>
    )
}
