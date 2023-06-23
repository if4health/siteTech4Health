import getAuthors from "./helpers/getAuthors";
import "../../../css/renderWorks.css";

export default function renderWorks(data){
    let list = [];
    let key = 0;

    function dowloadWork(link){
        console.log("link")
    }
                
    data.forEach((e) => {
        list.push(
            <>
                <div key={key}>
                    <span className="badge badge-pill badge-success font-medium">{e.date}</span>
                    <span className="dowload-button badge badge-pill badge-success font-medium">
                        <a aria-hidden="true" href="ASDASDAS" style={{"width": "100%"}{"height": "100%"}}>
                            <i className="fa fa-download" id="dowload" aria-hidden="true"></i>
                        </a>
                    </span>
                    <li>
                        <h5 className="text-original-dark-blue">
                            {e.titulo} 
                        </h5>
                        <p className="card-text">
                            <span className="text-muted font-weight-light">
                                {e.local}
                            </span><br/>
                            Apresentação: <strong>{getAuthors(e.authors)}</strong>
                            <br/>   
                            <br/>
                        </p>
                    </li>
                </div>
                <br/>
                <br/>
            </>
        );  
    });
    return list;
}