export default function renderLinks(data){
    let list = [];
    let res = {
        list: undefined,
        tittle: undefined
    };

    data.forEach((e) => {
        list.push(
            <div key={e._id}>
                <div className="card card-body mb-3">
                    <h5 className="card-title">
                        <a>link</a>
                    </h5>
                </div>
            </div>
        );  
        res.tittle = e.tittle
    });
    return list;
}