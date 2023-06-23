export default function renderLinks(data){
    let list = [];
    let i = 0;

    data.forEach((e) => {
        list.push(
            <div key={e._id}>
                <div className="card card-body mb-3">
                    <h5 className="card-title">
                        <a href={id} target="_blank">{e.name}</a>
                    </h5>
                </div>
            </div>
        );  
        i += 1;
    });
    return list;
}