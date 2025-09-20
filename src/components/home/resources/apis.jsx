export default function Apis(){
    return(
        <div className="col-md-4">  
            <div className="card text-center mt-3">   
                <div className="card-body">
                    <h5 className="card-title text-original-dark-blue"><i className="fa fa-code fa-2x" aria-hidden="true"></i></h5>
                    <h6 className="card-subtitle mb-2 text-muted">API's e Aplicações</h6>
                    <p className="card-text">
                        Lista de API's desenvolvidas pelo grupo
                    </p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                    <a href="https://if4health.charqueadas.ifsul.edu.br/biofass/api-docs/">Biossignal in FHIR</a>
                    </li>
                    <li className="list-group-item text-muted">
                    <a href="https://if4health.charqueadas.ifsul.edu.br/ifcloud/home" target="_blank">IF-Cloud</a>
                    </li>
                    <li className="list-group-item text-muted">
                    <a href="https://if4health.charqueadas.ifsul.edu.br/ifcloud/home" target="_blank">SMART on FHIR users</a>
                    </li>
                    <li className="list-group-item text-muted">
                    <a href="https://if4health.charqueadas.ifsul.edu.br/healthgate/login" target="_blank">Health Gate</a>
                    </li>                    
                    <li className="list-group-item text-muted">
                    <a href="https://if4health.charqueadas.ifsul.edu.br/tech4healthapi" target="_blank">Site Admin</a>
                    </li>                    
                </ul>
            </div>
        </div>
    );
}