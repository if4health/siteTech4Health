import loadingGif from '../../../../img/icons/blue_spinner.gif';

export default function loading(){
    return(
        <section className="mt-3">
            <a name="publicacoes"></a>
            <h2>Publicações/Apresentações</h2>
            <div className="row d-flex justify-content-center align-items-center">
                <div className="card">
                    <img src={loadingGif} height={"100px"} width={"100px"} alt="caregando conteúdo..."/>                
                </div>
            </div>
        </section>
    );
}