export default function Info(){
    return(
        <>
            <div className="card-header">
                <h5>
                    CloudECG - Servico Web para Transmissao, Processamento e Armazenamento de Eletrocardiogramas (ECGs) 
                </h5>
            </div>
            <div className="card-body">
                <p className="card-text">
                    Considere <strong>ECG devices</strong> enviando dados pela internet para habilitar ECG por telemedicina. <strong>CloudECG</strong> disponibiliza uma série de rotas para a comunicacão com <strong>ECG devices</strong>. Como os dados de um ECG não cabem em uma única requisição web, <strong>CloudECG</strong> consegue processar múltiplas requisições enviadas em rajadas e organizá-las no banco incrementalmente. O BD é não-relacional (<strong>MongoBD</strong>) e armazena dados no formato <strong>JSON</strong>. Os dados ECG podem necessitar de processamento de sinal digital para eliminação de ruídos e adequação de frequências. A ferramenta <strong>BioSPPy</strong> fornece uma série de funções para processamentode biosinais e está totalmente integrada e automatizada para o uso dentro de <strong>CloudECG</strong>, habilitando-o a receber sinais de ampla gama de  <strong>ECG devices</strong>. <strong>CloudECG</strong> também oferece rotas para a comunicacão com aplicativos e sites (<strong>PWA</strong>), permitindo a visualização virtual de ECGs.
                </p>
            </div>
        </>    
    )
}