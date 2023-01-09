import ExtraImage from "./extraImage";

export default function Info(){
    return(
        <>
            <ExtraImage/>
            <div class="card-body">
                <p class="card-text">
		            <h5>
                        Projeto de Pesquisa aprovado no Edital PROPESP 04-2021: 
                    </h5>
                        Existem diversas possibilidades de trabalhos de conclusão de curso (TCCs) implementando novas funcionalidades ou melhorias no sistema de aquisição e processamento de sinais de ECG. Atualmente, nosso grupo de pesquisa conta com um simulador de ECGs e arritmias cardíacas modelo Handy SIM HS-30, que permite simulações de diferentes condições cardíacas reais. Além disso, possuímos um cabo ECG de 10 vias com blindagem e padrão de cores comercial para simulação de exames de ECG de até 12 derivações. O cabo permite a interligação entre os eletrodos e o circuito eletrônico de condicionamento dos sinais elétricos provenientes do simulador (Frontend ECG). Por fim, os sinais condicionados são digitalizados pelos conversores A/D da plataforma de desenvolvimento Discovery ST32F769-DISC0 da fabricante <strong>STMicroelectronics</strong>. Essa plataforma conta com display LCD de alta resolução e tecnologia touch para criação de telas de configuração e visualização do sinais de ECG. Ademias, a plataforma possui um microcontrolador com core ARM®Cortex®-M7 de 32 bits e um barramento compatível com shields da família Arduino. A figura abaixo apresenta algumas imagens desses módulos supracitados.
                </p>
	        </div>
        </>
    );
}