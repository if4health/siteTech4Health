// modules //

const bucketUrl = "http://localhost:8080/";

export default function renderLinks(data){
    let list = [];

    data.forEach((e) => {

        list.push(
            // <div className="text-center">
            //     <a key={e.id} href={`/LinkTreePage?LinkId=${e.id}`}>{e.tittle}</a><br/>
            // </div>
            
            <div class="d-flex align-items-center justify-content-center" style="height: 100vh;">
            <div>
            <h1>Meu Título</h1>
            <p>Meu conteúdo</p>
            </div>
            </div>

        );  
    });
    return list;
}