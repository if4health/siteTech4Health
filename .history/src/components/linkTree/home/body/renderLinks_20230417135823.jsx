// modules //

const bucketUrl = "http://localhost:8080/";

export default function renderLinks(data){
    let list = [];

    data.forEach((e) => {
        // list.push(
        //     <div style={{left: "1000px"}}>
        //         <a>{e.tittle}</a>
        //     </div>
        // );  

        list.push(
            <div key={e._id}>
                <div className="card card-body mb-3">
                    <h5 className="card-title">
                        <p>{e</p>
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted font-weight-light"> {e.quote}</h6>
                    <p className="card-text">
                        <i aria-hidden="true" className="fa fa-mortar-board text-original-dark-blue"></i> {e.tipo}<br/>
                        <i aria-hidden="true" className="fa fa-check text-original-dark-blue"></i> {e.curso}<br/>
                        <i aria-hidden="true" className="fa fa-calendar text-original-dark-blue"></i> {e.status}<br/>
                        {insertEmail(e.email)}
                    </p>
                    <small className="text-center">
                        <div className="btn-group">
                            {insertLattes(e.lattes)}
                            {insertLinkedin(e.linkedin)}
                            {insertGithub(e.github)}
                        </div>
                    </small>
                </div>
            </div>
        );  
    });
    return list;
}