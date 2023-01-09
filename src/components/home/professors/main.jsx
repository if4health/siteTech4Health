import P1 from "./p1";
import P2 from "./p2";
import P3 from "./p3";

export default function Main(){
    return(
        <section>
            <a name="professores"></a><h2>Professores</h2>
            <div className="row">
                <P1/>
                <P2/>
                <P3/>
            </div>    
        </section>
    );
}