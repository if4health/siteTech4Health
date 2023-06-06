export default function Links(){
    return(
        <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="navbar-nav">
                <li>
                    <a className="nav-link" href="/"> <i aria-hidden="true" className="fa fa-lg fa-home"></i> Inicio</a>
                </li>
                <li>
                    <a className="nav-link" href="/LinkTreeList"> <i aria-hidden="true" className="fa fa-lg fa-arrow-left"></i> Voltar</a>
                </li>
            </ul>
        </div>
    );
}