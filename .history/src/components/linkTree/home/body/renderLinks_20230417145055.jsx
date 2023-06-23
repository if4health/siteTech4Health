// modules //

const bucketUrl = "http://localhost:8080/";

export default function renderLinks(data){
    let list = [];

    data.forEach((e) => {
        list.push(
            <div key={e._id}>
                <div className="card card-body mb-3">
                    <h5 className="card-title">
                        <a href={"/Linkree/?id=" + e._id}>{e.tittle}</a>
                    </h5>
                </div>
            </div>
        );  
    });
    return list;
}