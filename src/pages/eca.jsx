import NavBar from '../components/eca/navbar/main';
import Info from '../components/eca/info/main';
import Suges from '../components/eca/suges/main';

export default function Eca(){
    return(
        <div>
            <NavBar/>
            <div className="container" style={{"marginTop":"70px"}}>        
                <Info/>
                <Suges/>
            </div>
        </div>
    );
}