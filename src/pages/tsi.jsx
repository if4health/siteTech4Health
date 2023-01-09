import NavBar from '../components/tsi/navbar/main';
import Info from '../components/tsi/info/main';
import Suges from '../components/tsi/suges/main';

export default function Tsi(){
    return(
        <div>
            <NavBar/>
            <div className="container" style={{"marginTop":"70px"}}>        
                <Info/>
                <br/>
                <br/>
                <Suges/>
            </div>
        </div>
    );
}