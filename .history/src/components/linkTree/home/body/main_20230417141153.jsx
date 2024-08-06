import Links from './links';

export default function Main(){
    return(
        <section className="mt-3" style={{padding: "1rem, 15rem, 1rem, 1"}}>
            <a name="alunos"></a>
            <h2>Alunos</h2>
            <div id="alunosCarousel" data-ride="carousel">
                <Links/>
            </div>
        </section>   
    )
}