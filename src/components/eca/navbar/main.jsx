import Logo from './logo';
import Links from './links';
import HamburguerButton from './hamburguerButon';


export default function Main(){
    return(
        <nav name="topo" className="navbar navbar-expand-lg fixed-top navbar-dark">
            <Logo/>
            <Links/>
            <HamburguerButton/>
        </nav>
    );
}