import getAuthors from "./helpers/getAuthors";

export default function renderWorks(data){
    let list = [];
    let key = 0
                
    data.forEach((e) => {
        list.push(
            <>
                <div key={key}>
                    <span className="badge badge-pill badge-success font-medium">{e.date}</span>
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
            </>
        );  
    });
    return list;
}