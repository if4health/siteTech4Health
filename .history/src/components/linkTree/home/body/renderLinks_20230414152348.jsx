// modules //

const bucketUrl = "http://localhost:8080/";

export default function renderLinks(data){
    let list = [];

    data.forEach((e) => {

        list.push(
            <div className="text-center">
                <a key={e.id} href={`/LinkTreePage?LinkId=${e.id}`}>{e.tittle}</a><br/>
            </div>
            
            );  
    });
    return list;
}