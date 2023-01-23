export const Form = () => {
    return (
        <>
            <div className="d-flex flex-column justify-content-center align-items-center h-50">

            <div className="w-50">
                <form >
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control"/>
                    <button type="submit" className="btn btn-primary mt-3">Submit</button>
                </form>
            </div>

            </div>
        </>
    )
}