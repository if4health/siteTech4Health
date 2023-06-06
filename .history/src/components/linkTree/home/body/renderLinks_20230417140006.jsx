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
                        <p>{e.tittle}</p>
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted font-weight-light"></h6>
                </div>
            </div>
        );  
    });
    return list;
}