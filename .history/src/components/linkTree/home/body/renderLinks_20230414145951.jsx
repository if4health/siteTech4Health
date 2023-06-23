// modules //

const bucketUrl = "http://localhost:8080/";

export default function renderLinks(data){
    let key = 0;
    let list = [];

    data.forEach((e) => {

        list.push(
            <>
                <a key={e.id} href={`/LinkTreePage?LinkId=${e.id}`}>e.tittle</a><br/>
            </>
        );  
    });
    return list;
}