export default function Sug2(){
    return(
        <>
            <div className="col-md-6 mt-3">
      <div className="card">
        <div className="card-header">
          <h5>
            <span className="numero"></span> - (Des)Compactação de dados ECG
          </h5>
        </div>
        <div className="card-body">
          <p className="card-text">ECG eh uma informacao altamente redundante e com grande volume de dados</p> 

          <p className="card-text">Nao ha razao para sobrecarregar as redes transmitindo os dados sem qualquer tipo de tratamento </p>

          <p className="card-text">Qualquer tipo de comunicacao seria beneficiada, mas essa tecnica eh especialmente benefica para IoT, pois pode habilitar comunicacao low-power de alto alcance (LoRa, SigFox) </p>

          <p className="card-text">
            O plano é (i) estudar os algoritmos de compactação classNameicos e especificos para ECG e (ii) aplicar a <strong>compactação</strong> - na nuvem antes de enviar para os PWAs ou num dispositivo de hardware antes de enviar um ECG - e a (iii) <strong>DEScompactação</strong> antes de armazenar os dados no BD.
          </p>
          <p>
            TCC no tema de compressao de sinais ECG
          </p>

          <ul>
            <li>
              Qualquer aplicacao de compacatacao/descompactacao de dados dentro de CloudECG.
            </li>
            <li>
              Implementacao e Comparacao entre algoritmos de compacatacao/descompactacao de biosinais.
            </li>
            <li>
              Receber um ECG completo do ECG device;
            </li>
            <li>
              Validador de FHIR - um programa em qualquer linguagem que verifica se um arquivo esta dentro do padrao FHIR;
            </li>
          </ul>

          <p className="card-text">
            A Compactação pode estar na nuvem antes de enviar dados para os PWAs ou num dispositivo de hardware antes de enviar um ECG.
          </p>
          <p className="card-text">
            A DEScompactação pode estar na nuvem antes de enviar dados para os PWAs ou num dispositivo de hardware antes de enviar um ECG.
          </p>
          <p>
          </p>
        </div>

        <ul className="list-group list-group-flush">
          <li className="list-group-item text-muted">
            <a href="../docs/neira2018.pdf" target="_blank">Artigo 1 - Effective high compression of ECG
signals at low level distortion</a>
          </li>
        </ul>
      </div>
    </div>
        </>
    );
}