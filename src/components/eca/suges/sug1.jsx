export default function Sug1(){
    return(
        <>
            <div className="col-md-6 mt-3">
	    <div className="card">
        <div className="card-header">
          <h5>
            <span className="numero"></span>1 - Compressão eficiente de ECG para healthcare
          </h5>
        </div>
        <div className="card-body">
          <p className="card-text">Em geral, o procedimento de diagnóstico de doenças cardíacas demanda a análise de longos exames de ECG. Por isso, os sistemas de aquisição e processamento de sinais de ECG devem possuir grande capacidade de memória para armazenar esse grande volume de dados. Grande parte desses dados é redundante e não necessita ser analisada pelo médico.
		Por isso, existem técnicas de compressão que visam reduzir esse volume com alguma tipo de perda (distorção controlada) ou sem nenhuma perda de informação. 
		Em sistemas de telemedicina, a compressão dos dados reduz a quantidade de processamento, memória de armazenamento e a banda de transmissão para servidores localizados na nuvem. </p> 

 

          <p className="card-text">
             <strong>Objetivo da Proposta:</strong> 
	     <ul>
            <li>
             Estudar diferentes métodos de compressão de sinais de ECG;
            </li>
             <li>
              Propôr novas técnicas e avaliar seu desempenho comparado com outras soluções do mesmo segmento através de métricas de avaliação de distorção;            </li>
		     <li>
	Converter a técnica desenvolvida em algoritmo;
		     </li>
		     <li>
			  Implementar um código C para o microcontrolador presente na plataforma de desenvolvimento;    
		     </li>
		     <li>
			   Realizar testes práticos na plataforma.
		     </li>
		</ul>
		
		 
          </p>
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
        </div>

        <ul className="list-group list-group-flush">
          <li className="list-group-item text-muted">
            <a href="../docs/elgendi2017.pdf" target="_blank">Artigo 1 - Efficient ECG Compression and QRS Detection for E-Health Applications</a>
          </li>
          <li className="list-group-item">
            <a href="../docs/rebollo-neira2019.pdf" target="_blank">Artigo 2 - Efective high compression of ECG signals at low level distortion</a>
          </li>
        </ul>
      </div>
    </div>
        </>
    )
}