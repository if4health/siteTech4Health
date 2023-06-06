import Links from './links';

export default function Main(){
    return(
        <section className="mt-3" style={{padding: "20rem"}}>
            <a name=""></a>
            <h2>Link Trees</h2>
            <div id="alunosCarousel" data-ride="carousel">
                <Links/>
            </div>
        </section>   
    )
}