export default function Links(){
    return(
        <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="navbar-nav">
                <li>
                    <a className="nav-link" href="/link"> <i aria-hidden="true" className="fa fa-lg fa-arrow-left"></i> Voltar</a>
                </li>
                <li>
                    <a className="nav-link" href="/"> <i aria-hidden="true" className="fa fa-lg fa-home"></i> Inicio</a>
                </li>
            </ul>
        </div>
    );
}