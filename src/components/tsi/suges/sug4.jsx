export default function Sug4(){
    return(
        <div className="col-md-6 mt-3">
      <div className="card">
        <div className="card-header">
          <h5>
            <span className="numero"></span> - Dashboard completa no PWA
          </h5>
        </div>
        <div className="card-body">
          <p className="card-text">O PWA foi escolhido para permitir deploy de site, app Android e app iOS com o mesmo codigo-fonte. </p> 

          <p className="card-text">PWA atual eh apenas um prototipo para mostrar o conceito, mas necessita de MUITAS melhorias. </p>

          <p className="card-text">TCC - Visualização de ECG: o PWA nao pode receber 30 minutos de um ECG de uma so vez. Eh necessario pensar em uma solucao para permitir uma visualizacao adequeada sem precisar carregar e processar uma enorme quantidade de dados de uma unica vez. </p>

          <p className="card-text">TCC - Visualização de ECG: A animacao da onda tambem nao esta correta. Nao esta no timing que deveria ser. O desafio aqui eh: como fazer o streaming do ECG em um canvas atraente e na velocidade correta? </p>

          <p className="card-text">
            TCC: Considere que profissionais de saúde serão consultados, as funcionalidades desejadas para os clientes web são:

            <ul>
              <li>
                Visualização da forma de onda do sinal ECG do paciente;
              </li>
              <li>
                Prontuário virtual - identificação do paciente; localização; evoluções médica, de enfermagem e de outros profissionais assistentes;
              </li>
              <li>
                Laudo médico em relação ao ECG;
              </li>
              <li>
                Diagnóstico de eventuais problemas de saúde;
              </li>
              <li>
                Prescrição de tratamento médico - rotina de cuidados com a saúde - medicamentos, nutrição, exercícios, etc;
              </li>
              <li>
                Histórico de exames ECG do paciente contendo prontuário, laudo, diagnóstico, prescrição de tratamento e receita. 
              </li>
            </ul>
          </p>
        </div>

        <ul className="list-group list-group-flush">
          <li className="list-group-item text-muted">
            <a href="../docs/farahani2017.pdf" target="_blank">Artigo - Towards fog-driven IoT eHealth: Promises and challenges of IoT in
medicine and healthcare</a>
          </li>
        </ul>
      </div>
    </div>
    );
}