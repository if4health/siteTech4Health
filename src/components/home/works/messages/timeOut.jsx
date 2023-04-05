export default function timeOutMessage(){
    return(
        <section className="mt-3">
            <a name="publicacoes"></a>
            <h2>Publicações/Apresentações</h2>
            <div className="row">
                <span className="badge badge-pill badge-success font-medium">
                    Não foi possível mostrar as publicações
                </span>
                <p className="card-text">
                    <span className="text-muted font-weight-light">
                        Verifique se sua conexão com a internet está realmente boa, caso mesmo esteja e o erro continue por favor nos informe através do email:
                    </span><br/>
                    <span className="text-muted font-weight-light">
                        <strong>
                            andremartins@ifsul.edu.br
                        </strong>
                    </span>
                    <br/>   
                    <br/>
                </p>
            </div>
        </section>
    )
}