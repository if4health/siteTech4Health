// modules //

const bucketUrl = "http://localhost:8080/";

export default function renderLinks(data){
    let list = [];

    data.forEach((e) => {
        list.push(
            <div key={e._id}>
                <div className="card card-body mb-3">
                    <h5 className="card-title">
                        <p>{e.tittle}</p>
                    </h5>
                    <div className="btn-group">
                        
                    </div>
                </div>
            </div>
        );  
    });
    return list;
}