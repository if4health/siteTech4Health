export default function Links(){
    return(
        <ul className="list-group list-group-flush">
            <li className="list-group-item text-muted">
                <a href="https://ecgremote.herokuapp.com/" target="_blank">CloudECG rodando na nuvem</a>
            </li>
            
            <li className="list-group-item">
                <a href="https://ecgremote.netlify.app/" target="_blank">Prototipo site PWA rodando sinais ECG</a>
            </li>
            
            <li className="list-group-item">
                <a href="https://youtu.be/9pYnO2bY8vM" target="_blank">Video de aplicativo PWA rodando em um celular</a>
            </li>

            <li className="list-group-item">
                <a href="https://github.com/MarceloSkank/ECGRemote" target="_blank">Código fonte de CloudECG</a>
            </li>

            <li className="list-group-item">
                <a href="https://github.com/MarceloSkank/ECGFrontEnd" target="_blank">Código fonte do PWA</a>
            </li>
            
            <li className="list-group-item">
                <a href="https://biosppy.readthedocs.io/en/stable/" target="_blank">Documentacao BioSPPy</a>
            </li>
      </ul>
    )
}