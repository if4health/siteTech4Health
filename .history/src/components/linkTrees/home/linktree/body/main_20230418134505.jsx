import Links from './links';
import RenderLinks from './renderLinks';

export default function Main(){
    return(
        <section className='d-flex justify-content-center align-items-center'>
            <div className="mt-3" style={{minWidth: "60vw"}}>
                <a name="linktree"></a>
                <h2 style={{minWidth: "7.445vw"}}></h2>
                <div data-ride="carousel">
                    <Links/>
                </div>
            </div>
        </section>   
    )
}