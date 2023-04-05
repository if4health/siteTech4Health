export default function Repos(){
    return(
        <div className="col-md-4">  
            <div className="card text-center mt-3">   
                <div className="card-body">
                    <h5 className="card-title text-original-dark-blue"><i className="fa fa-github fa-2x" aria-hidden="true"></i></h5>
                    <h6 className="card-subtitle mb-2 text-muted">Repositorios</h6>
                    <p className="card-text">
                        Lista de softwares com código aberto desenvolvidos pelo Grupo IF4Health
                    </p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                    <a href="https://github.com/fabioitturriet/Discovery-kit-with-STM32F769NI-MCU-FIRMWARE-SDCARD_ADC_UART" target="_blank">Código fonte do Firmware placa ST</a>
                    </li>
                    <li className="list-group-item text-muted">
                    <a href="https://github.com/MarceloSkank/ECGRemote" target="_blank">Código fonte do servidor (projeto ECG)</a>
                    </li>
                    <li className="list-group-item text-muted">
                    <a href="https://github.com/MarceloSkank/ECGFrontEnd" target="_blank">Código fonte do PWA (projeto ECG)</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}