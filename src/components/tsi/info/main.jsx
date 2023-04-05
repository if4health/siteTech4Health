import Info from "./info";
import Links from "./links";

import image from "../../../img/posters/cloudserver.png";

export default function Main(){
    return(
        <section>
            <div className="row">
                <a name="overview"></a><h2>VISÃO GERAL</h2>
                <div className="col-12">
                    <div className="card">
                        <img src={image} loading="lazy" className="card-img-top" alt="Cloud RCG overview"/>
                        <Info/>
                        <Links/>
                    </div>
                </div>
            </div>
        </section>
    );
}