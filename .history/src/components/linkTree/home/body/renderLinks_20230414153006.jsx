// modules //

const bucketUrl = "http://localhost:8080/";

export default function renderLinks(data){
    let list = [];

    data.forEach((e) => {

        list.push(<div className={} style={{position : "relative"},{height: "100vh"}}>
                <div>
                    <h1>Meu Título</h1>
                    <p>Meu conteúdo</p>
                </div>
            </div>
        );  
    });
    return list;
}