import image from '../../../img/professors/juliano.jpeg';

export default function P3(){
    return(
        <div className="col-lg-4 text-center">
            <img className="rounded-circle" src={image} alt="Foto de rosto de Juliano Machado" style={{"width":"140px"}}/>
            <h3 className="text-original-dark-blue">Juliano Machado</h3>
            <h6 className="text-muted"><i aria-hidden="true" className="fa fa-envelope-o"></i> julianomachado@ifsul.edu.br</h6>
            <p className="text-justify">
                Doutor em Engenharia Elétrica (UFRGS-2022). Professor de Eletrônica. Tem experiência na área de Engenharia Elétrica, com ênfase em Instrumentação Eletrônica, atuando principalmente nos seguintes temas: eletromiografia (EMG), brain computer interface (BCI), inteligência computacional, eletrônica e robótica.</p>
            <p>
            <a className="btn btn-success" href="http://lattes.cnpq.br/8432315655154147" role="button">Lattes &raquo;</a>
            </p>
        </div>
    );
}