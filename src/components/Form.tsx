import { useState } from "react"
import { useActions } from "../hooks/useActions"


export const Form = () => {
    const { fetchUser, fetchRepos } = useActions()
    const [userName, setUserName] = useState("")

    const inputUpdateHandler =(e:React.ChangeEvent<HTMLInputElement>) => {
        
        setUserName(e.target.value)
        console.log(userName)
    }

    const buttonHandler = (e:React.MouseEvent<HTMLElement>) => { 
        e.preventDefault()
        fetchRepos(userName) as any
        fetchUser(userName) as any
    }
       
   
    return (
        <>
            <div className="d-flex flex-column justify-content-center align-items-center h-50">

            <div className="w-50">
                <form >
                    <label className="form-label">Name</label>
                    <input onChange={inputUpdateHandler} type="text" className="form-control"/>
                    <button onClick={buttonHandler} className="btn btn-primary mt-3">Submit</button>
                </form>
            </div>

            </div>
        </>
    )
}