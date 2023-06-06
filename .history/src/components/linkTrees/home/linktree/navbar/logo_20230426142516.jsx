import logo from '../../../../../img/icons/if-menu-branco.png'

export default function Logo(){
    const style = {
        "width":"200px",
    }

    return(
        <div className="navbar-brand">
            <a className="nav-item navbar-link" href="http://www.charqueadas.ifsul.edu.br/portal/" target="_blank">           
                <img src={logo} alt="logomarca IFSul branca" style={style}/>
            </a>
        </div>
    );
}