import getAuthors from "./helpers/getAuthors";

export default function renderWorks(data){
    let list = [];
    let key = 0
                
    data.forEach((e) => {
        let month;
        const months = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"];
        month = months[e.month - 1];
        key += key;

        list.push(
            <div key={key}>
                <span className="badge badge-pill badge-success font-medium">{month + "/" + e.year}</span>
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
        );  
    });
    return list;
}