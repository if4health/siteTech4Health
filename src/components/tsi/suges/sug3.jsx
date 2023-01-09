export default function Sug3(){
    return(
        <div className="col-md-6 mt-3">
      <div className="card">
        <div className="card-header">
          <h5>
            <span className="numero"></span> - Ciclo de controle ODA - Observar-Decidir-Atuar
          </h5>
        </div>
        <div className="card-body">
          <p>A observacao do ECG ja existe em com CloudECG e PWAs. Entretanto, nada eh feito com esta informacao </p> 

          <p>A partir da analise de um ECG, eventos podem ser identificados - alteracoes que indicam problemas cardiacos </p>

          <p>CloudECG pode simplesmente enviar a lista de eventos para o PWA e deixar o medico avaliar </p>

          <p>CloudECG pode rodar um algoritmo (ML ou heuristica) para identificar o tipo de evento (exemplo: qual a doenca cardiaca mais provavel ou falha na cominicação) </p>

          <p>
            A partir da lista de eventos, medico+CloudECG podem tomar decisoes: sugerir tratamentos, cirurgias, medicação... 
          </p>

          <p>
            A atuação (executar as decisoes tomadas) nao eh trabalhada por questoes de etica e saude 
          </p>

          <p><a href="https://physionet.org/" target="_blank">Repositorio Physionet</a> tem diversas amostras de ECG reais com a lista de eventos que servem para comparacao com o resultado que venha a ser identificado.</p>

          <p>
            TCCs nessa area podem ter a insercao de informacoes adicionais
          </p>

          <ul>
            <li>
              CloudECG notifica ECG device quando um evento for identificado;
            </li>
            <li>
              Gerar lista de eventos em CloudECG de um ECG com boa precisao. 
            </li>
            <li>
              Qualquer aplicacao eventos em um ECG + algum nivel de classNameificacao.
            </li>
            <li>
              No PWA - Imagina um paciente ligado a um ECG 24h ou mesmo 30min: Criar uma lista de eventos para avaliacao do profissional de saude.
            </li>
          </ul>
        </div>

        <ul className="list-group list-group-flush">
          <li className="list-group-item text-muted">
            <a href="../docs/rahmani2018.pdf" target="_blank">Artigo 1 - Hierarchical Dynamic Goal Management for IoT Systems</a>
          </li>
          <li className="list-group-item">
            <a href="../docs/azimi2017.pdf" target="_blank">Artigo 2 - Hierarchical Fog-assisted Computing Architecture for
Healthcare IoT</a>
          </li>
        </ul>
      </div>
    </div>
    );
}