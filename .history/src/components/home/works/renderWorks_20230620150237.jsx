import getAuthors from "./helpers/getAuthors";
import "../../../css/renderWorks.css";

export default function renderWorks(data){
    let list = [];
    let key = 0;

    function dowloadWork(){
        
    }
                
    data.forEach((e) => {
        list.push(
            <>
                <div key={key}>
                    <span className="badge badge-pill badge-success font-medium">{e.date}</span>
                    <span className="dowload-button badge badge-pill badge-success font-medium">
                        <i className="fa fa-download" aria-hidden="true"></i>
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