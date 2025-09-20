import image from '../../../img/professors/fabio.jpg'

export default function P2(){
    return(
        <div className="col-lg-4 text-center">
            <img className="rounded-circle" src={image} alt="Foto de rosto de Fábio Itturriet" style={{"width":"140px"}}/>
            <h3 className="text-original-dark-blue">Fábio Itturriet</h3>
            <h6 className="text-muted"><i aria-hidden="true" className="fa fa-envelope-o"></i> fabioitturriet@utfpr.edu.br</h6>
            <p className="text-justify">
                Doutor em Engenharia Elétrica (UFSC-2019). Professor de Processamento Digital de Sinais e Circuitos Elétricos I do curso de Engenharia de Controle e Automação. 
		        Coordena projetos de pesquisa e orienta trabalhos acadêmicos nas áreas de Engenharia Biomédica, Telemedicina, Técnicas e Circuitos reconfiguráveis para redução de ruído em aparelhos auditivos.
            </p>
            <p>
            <a className="btn btn-success" href="http://lattes.cnpq.br/5232832741928891" role="button">Lattes &raquo;</a> &nbsp;
            <a className="btn btn-success" href="http://www.fabioitturriet.com.br/" role="button">Site &raquo;</a>
            </p>
        </div>
    );
}