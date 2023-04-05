import Sug1 from "./sug1";
import Sug2 from "./sug2";
import Sug3 from "./sug3";
import Sug4 from "./sug4";

export default function Main(){
    return(
        <section>
            <a name="eca"></a><h2>SUGESTÕES</h2>
            <div className="row">
                <Sug1/>
                <Sug2/>
                <Sug3/>
                <Sug4/>
            </div>
        </section>
    );
}