import { useTypedSelector } from "../hooks/UseTypedSelectors";


export const ReposList = () => {
    const { repos, loading } = useTypedSelector(state => state.repos)
    console.log(repos)
    return (
        <>
        {
            !loading
            ?
            (repos.length !== 0)
            ?
            <>
            <ul className=" list-group" style={{maxHeight: "30vh", overflow: "scroll"}}>            
               { repos.map((repo) => {
                   return <li><a href={`${repo.html_url}`} className="list-group-item list-group-item-action list-group-item-primary border border-primary">{repo.name}</a></li>
                })}   
               </ul>
            </>
            :
            <p>no repos</p>
            :
            <p>loading repos..</p>
        }
        </>
    )
}