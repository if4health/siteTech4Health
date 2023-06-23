import Links from './links';

export default function Main(){
    return(
        <section className="mt-3"  style={{padding: "10rem"}}>
            <a name="alunos"></a>
            <h2>Alunos</h2>
            <div id="alunosCarousel" data-ride="carousel">
                <Links/>
            </div>
        </section>   
    )
}