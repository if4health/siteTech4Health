export default function Sug1(){
    return(
        <>
                <div className="col-md-6 mt-3">
                  <div className="card text-white bg-dark">
                    <div className="card-header">
                      <h5>
                        <span className="numero"></span> - Comunicação ao padrão internacional FHIR
                      </h5>
                    </div>
                    <div className="card-body">
                      <p className="card-text">O padrão de comunicação que me refiro se chama FHIR - Fast Healthcare Interoperability Resources</p> 

                      <p className="card-text">De acordo com o site: "FHIR is a standard for health care data exchange"
                      <a href="https://www.hl7.org/fhir/" target="_blank">https://www.hl7.org/fhir/</a> </p>

                      <p className="card-text">Google Cloud Platform da um baita suporte - <a href="https://cloud.google.com/healthcare/docs/how-tos/fhir">confira</a></p>

                      <p className="card-text">
                        O plano é (i) estudar o padrão e tentar implementar tanto do lado da (ii) nuvem, quanto do lado do (iii) hardware, e, finalmente, (iv) do lado do PWA.
                      </p>
                      <p className="card-text">
                        Durante o desenvolvimento, para mudar o padrão JSON formato livre criado pelo Marcelo para o FHIR serão necessárias uma das duas modificações: adequar o banco de dados para o novo formato ou desenvolver um script que converta FHIR para o padraoMarcelo.
                      </p>
                      <p>
                        Qualquer aplicacao dentro do padrao FHIR serve para um TCC:
                      </p>
                      <ul>
                        <li>
                          Autenticacao para ECG devices e PWA;
                        </li>
                        <li>
                          enviar ECG para o PWA;
                        </li>
                        <li>
                          Receber um ECG completo do ECG device;
                        </li>
                        <li>
                          Validador de FHIR - um programa em qualquer linguagem que verifica se um arquivo esta dentro do padrao FHIR;
                        </li>
                      </ul>
                    </div>

                    <ul className="list-group list-group-flush">
                      <li className="list-group-item text-muted">
                        <a href="../docs/walinjkar2017.pdf" target="_blank">Artigo 1 - Real-time ECG classNameification and FHIR Interoperability</a>
                      </li>
                      <li className="list-group-item">
                        <a href="../docs/benhamida2020.pdf" target="_blank">Artigo 2 - A new FHIR data format for continuous ECG monitoring</a>
                      </li>
                    </ul>
                  </div>
                </div>
        </>  
    );
}