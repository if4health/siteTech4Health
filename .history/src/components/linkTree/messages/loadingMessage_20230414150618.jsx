import loadingGif from "../../../img/";

export default function loadingMessage(){
    return(
        <section className="mt-3">
            <a name="publicacoes"></a>
            <h2>Projetos</h2>
            <div className="row d-flex justify-content-center align-items-center">
                <div className="card">
                    <img src={loadingGif} height={"100px"} width={"100px"} alt="caregando conteúdo..."/>                
                </div>
            </div>
        </section>
    );
}