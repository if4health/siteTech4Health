export default function renderLinks(data){
    let res = {
        
    };
    let list = [];

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
    });
    return list;
}