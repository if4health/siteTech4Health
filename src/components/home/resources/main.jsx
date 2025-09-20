import Events from './events';
import Hardware from './hardware';
import Repos from './repos';
import Apis from './apis';



export default function name(){
    return(
        <section className="mt-3">
            <a name="recursos"></a>
            <h2>Recursos</h2>
            <div className="row">
                <Apis/>
                <Repos/>
                <Events/>
                {/*<Hardware/>*/}
            </div>   
        </section>
    );
}