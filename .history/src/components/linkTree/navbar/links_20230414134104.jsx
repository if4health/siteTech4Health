export default function Links(){
    return(
        <>
            <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="navbar-nav">
                    <li>
                        <a className="nav-link" href="/#sobre"><i aria-hidden="true" className="fa fa-lg fa-info-circle"></i> Sobre</a>
                    </li>

                    <li>
                        <a className="nav-link" href="/#projetos"><i aria-hidden="true" className="fa fa-lg fa-search"></i> Projetos</a> 
                    </li>

                    <li>
                        <a className="nav-link" href="/#publicacoes"><i aria-hidden="true" className="fa fa-lg fa-file-text"></i> Publicacoes</a>
                    </li>

                    <li>
                        <a className="nav-link" href="/#professores"><i aria-hidden="true" className="fa fa-lg fa-mortar-board"></i> Professores</a>
                    </li>

                    <li>
                        <a className="nav-link" href="#alunos"><i aria-hidden="true" className="fa fa-lg fa-users"></i>Alunos</a>
                    </li>
                    
                    <li>
                        <a className="nav-link" href="#recursos"> <i aria-hidden="true" className="fa fa-lg fa-share-alt"></i> Recursos</a>
                    </li>

                    <li>
                        <a className="nav-link" href="/LinkTree"> <i aria-hidden="true" className="fa fa-lg fa-link"></i> Link Trees</a>
                    </li>
                </ul>
            </div>
        </>
    );
}