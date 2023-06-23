import Links from './links';

export default function Main(){
    return(
        <section className='d-flex justify-content-center align-items-center'>
            <div className="mt-3" style={{minWidth: "60vw"}}>
                <a name="linktre"></a>
                <h2 style={{minWidth: "7.445vw"}}>Link Trees</h2>
                <div data-ride="carousel">
                    <Links/>
                </div>
            </div>
        </section>   
    )
}