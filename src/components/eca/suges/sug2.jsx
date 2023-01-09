export default function Sug2(){
    return(
        <>
            
    <div className="col-md-6 mt-3">
      <div className="card">
        <div className="card-header">
          <h5>
            <span className="numero"></span>2 - Técnicas não invasivas de estimação e monitoramento contínuo de pressão arterial
          </h5>
        </div>
        <div className="card-body">
          <p className="card-text">O método mais usado de aferição de pressão arterial é o oscilométrico através de um instrumento conhecido como <a href="https://www.tuasaude.com/esfigmomanometro/" target="_blank">esfigmomanômetro</a>. 
		Esse instrumento conta com uma bolsa inflável conectada a uma bomba de ar e a um manômetro para medir a pressão dentro da bolsa. Porém, a aferição com esse método necessita o uso de um estetoscópio por enfermeiros ou médicos. 
		Por esse motivo, a aferição não é possível de ser realizado pelo próprio indivíduo tornando praticamente impossível o monitoramento contínuo desse sinal vital.</p> 

         
          <strong>Objetivo da Proposta:</strong>
		
          <ul>
            <li>
              Procurar na literatura diferentes técnicas de estimação de pressão arterial;
            </li>
            <li>
              Desenvolver dispositivos eletrônicos que viabilizam a técnica escolhida;
            </li>
            <li>
              Implementar técnica(s) na plataforma e comparar seus desempenhos;
            </li>
            <li>
              Validar os resultados obtido através de comparação com métodos consolidados.
            </li>
          </ul>

            <p className="card-text">
           <strong>Habilidades Importantes:</strong> 
          </p>
          
          <ul>
            <li>
              Habilidades matemáticas com conceitos de disciplinas como Sinais e Sistemas e Processamento Digital de Sinais;
            </li>
	    <li>
               Programação no MATLAB;
            </li>	  
            <li>
              Programação em linguagem C/C++ para sistemas embarcados;
            </li>
            <li>
               Conhecimentos de eletrônica básica;
            </li>
            <li>
               Vontade de estudar e aprender coisas novas.
            </li>
          </ul>
          <p>
          </p>
        </div>

        <ul className="list-group list-group-flush">
          <li className="list-group-item text-muted">
            <a href="../docs/ahmadreza2020.pdf" target="_blank">Artigo 1 - A Novel Automated Blood Pressure Estimation Algorithm Using Sequences of Korotkoff Sounds
signals at low level distortion</a>
          </li>
		<li className="list-group-item">
            <a href="../docs/mousavi2019.pdf" target="_blank">Artigo 2 - Blood pressure estimation from appropriate and inappropriate PPG signals using A whole-based method</a>
          </li>
        </ul>
      </div>
    </div>
        </>
    )
}