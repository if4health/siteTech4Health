// modules //

const bucketUrl = "http://localhost:8080/";

export default function renderLinks(data){
    let list = [];

    data.forEach((e) => {

        list.push(
            <div style={{left: "1000px"}}>
                <a></a>
            </div>
        );  
    });
    return list;
}