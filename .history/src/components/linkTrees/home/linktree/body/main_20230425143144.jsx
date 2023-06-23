import Links from './links';

export default function Main(){
    return(
        <section className='d-flex justify-content-center align-items-center'>
            <div className="mt-3" style={{minWidth: "60vw"}}>
                <a name="linktree"></a>
                <Links/>
            </div>
        </section>   
    )
}