import Links from './links';

const style = {
    marginTop : "1rem",
    marginBottom: "1rem",
    marginLeft: "1rem",
    marginRight: "1rem"
}

export default function Main(){
    return(
        <section className='d-flex justify-content-center align-items-center'>
            <div className="mt-3" style={{minWidth: "60vw"}}>
                <a name="linktrees"></a>
                <h2 style={{minWidth: "7.445vw"}}>Link Trees</h2>
                <div data-ride="carousel">
                    <Links/>
                    <div className="btn-group">
                        ASD
                    </div>
                </div>
            </div>
        </section>   
    )
}