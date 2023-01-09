export default function Links(){
    return(
        <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="navbar-nav">
                <li>
                    <a className="nav-link" href="/"><i aria-hidden="true" className="fa fa-lg fa-home"></i> Home</a>
                </li>

                <li>
                    <a className="nav-link" href="#overview"><i aria-hidden="true" className="fa fa-lg fa-info"></i> Visao Geral</a> 
                </li>
                
                <li>
                    <a className="nav-link" href="#tcc"><i aria-hidden="true" className="fa fa-lg fa-book"></i> Sugestao de TCCs</a>
                </li>
            </ul>
        </div>
    );
}