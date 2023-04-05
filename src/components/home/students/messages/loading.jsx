import loadingGif from '../../../../img/icons/blue_spinner.gif';

export default function loadingMessage(trigger){
    if(trigger) {
        return(
            <section className="mt-3">
                <a name="alunos"></a>
                <h2>Alunos</h2>
                <div id="alunosCarousel" data-ride="carousel"></div>
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="card">
                        <img src={loadingGif} height={"100px"} width={"100px"} alt="caregando conteúdo..."/>                
                    </div>
                </div>
            </section>  
        );
    }
}