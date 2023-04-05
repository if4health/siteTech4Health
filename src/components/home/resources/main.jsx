import Events from './events';
import Hardware from './hardware';
import Repos from './repos';

export default function name(){
    return(
        <section className="mt-3">
            <a name="recursos"></a>
            <h2>Recursos</h2>
            <div className="row">
                <Hardware/>
                <Repos/>
                <Events/>
            </div>   
        </section>
    );
}