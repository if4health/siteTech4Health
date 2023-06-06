import Links from './links';

export default function Main(){
    return(
        <section className="mt-3">
            <a name="alunos"></a>
            <h2>Alunos</h2>
            <div id="alunosCarousel" data-ride="carousel">
                <Slider {...settings}>
                    {
                        students.map((i) => {
                            return(i);
                        })
                    }        
                </Slider>
            </div>
        </section>   
    )
}