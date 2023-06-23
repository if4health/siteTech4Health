import getAuthors from "./helpers/getAuthors";
import "../../../css/renderWorks.css";

export default function renderWorks(data){
    let list = [];
    let key = 0;

    function dowloadWork(link){
        console.log(link)
    }
                
    data.forEach((e) => {          
        list.push(
            <>
                <div key={key}>
                    <span className="badge badge-pill badge-success font-medium">{e.date}</span>&nbsp;&nbsp;
                        <a href={"https://if4health-files.s3.sa-east-1.amazonaws.com/pdf/" + e.mywork} className="btn btn-success badge badge-pill font-medium">
                            <i className="fa fa-download" id="dowload" aria-hidden="true"></i>
                        </a>
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

                https://if4health-files.s3.sa-east-1.amazonaws.com/pdf/full_55_p-416-423_out_CardIoT%2B-%2BEletrocardi%C3%83%C2%B3grafo%2BInteroper%C3%83%C2%A1vel%2BBaseado%2Bem%2BInternet+(1).pdf
                https://if4health-files.s3.sa-east-1.amazonaws.com/pdf/full_55_p-416-423_out_CardIoT+-+Eletrocardi%C3%83%C2%B3grafo+Interoper%C3%83%C2%A1vel+Baseado+em+Internet%20(1).pdf
            </>
        );  
    });
    return list;
}