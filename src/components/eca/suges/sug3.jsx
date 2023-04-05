export default function Sug3(){
    return(
        <>
         <div className="col-md-6 mt-3">
            <div className="card">
                <div className="card-header">
                    <h5>
                        <span className="numero"></span>3 - Redes neurais para detecção de cardiopatias 
                    </h5>
                </div>
            <div className="card-body">
                <p> As doenças cardíacas são a principal causa de morte no mundo. Diversas dessas doenças modificam a morfologia do sinal elétrico de ECG. 
                Por isso, técnicas de monitoramento contínuo com detecção de eventos relacionados com doenças cardíacas são importantes. </p> 
            </div>

            <ul className="list-group list-group-flush">
                <li className="list-group-item text-muted">
                  <a href="../docs/rahmani2018.pdf" target="_blank">Artigo 1 - Hierarchical Dynamic Goal Management for IoT Systems</a>
                </li>
                <li className="list-group-item">
                    <a href="../docs/azimi2017.pdf" target="_blank">Artigo 2 - Hierarchical Fog-assisted Computing Architecture for Healthcare IoT</a>
                </li>
            </ul>
        </div>
        </div>
    </>
    )
}