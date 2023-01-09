export default function Hardware(){
    return(
        <div className="col-md-4">
            <div className="card text-center mt-3">
                <div className="card-body">
                    <h5 className="card-title text-original-dark-blue"><i className="fa fa-microchip fa-2x" aria-hidden="true"></i></h5>
                    <h6 className="card-subtitle mb-2 text-muted">Hardware</h6>
                    <p className="card-text">
                        Lista com os equipamentos adquiridos pelo Grupo IF4Health utilizados para desenvolvimento das pesquisas
                    </p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <a href="https://www.st.com/en/evaluation-tools/32f769idiscovery.html">2 Plataformas de Desenvolvimento 32F769IDISCOVERY </a>
                    </li>
                    <li className="list-group-item">
                        <a href="https://www.st.com/en/evaluation-tools/nucleo-f401re.html">1 Plataformas de Desenvolvimento STM32 Nucleo-64 </a>
                    </li>    
                    <li className="list-group-item text-muted">
                        <a href="#">Chip de Front-End de 8 canais</a>
                    </li>
                    <li className="list-group-item text-muted">
                        <a href="https://protec.com.br/loja/detalhe/simulador-de-ecg-hs30e/PSIM0050">Simulador de ECG de 10 vias</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}