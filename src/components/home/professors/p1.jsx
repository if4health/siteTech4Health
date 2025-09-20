import image from '../../../img/professors/perfil.jpg'

export default function P1(){
    return(
        <>
            <div className="col-lg-4 text-center">
                <img className="rounded-circle" src={image} alt="Foto de rosto de André del Mestre" style={{"width":"140px"}}/>
                <h3 className="text-original-dark-blue">André del Mestre</h3>
                <h6 className="text-muted"><i aria-hidden="true" className="fa fa-envelope-o"></i>  andremartins@ifsul.edu.br</h6>
                <p className="text-justify">Doutor em Ciência da Computação (PUCRS-2018). Professor de Programação. Atualmente atua com pesquisas em Informática em Saúde, Interoperabilidade, Transformação Digital de Serviços de Saúde e IoT para HealthCare.</p>
                <p>
                    <a className="btn btn-success" href="http://lattes.cnpq.br/8570090119222585" role="button">Lattes &raquo;</a> &nbsp;
                    <a className="btn btn-success" href="https://andredelmestre.com.br/" role="button">Site &raquo;</a>
                </p>
            </div>
        </>
    );
}