export default function statusIcon(status){
    <i class="fa-solid fa-hourglass-start"></i>
    let res;
    switch(status){
        case "A iniciar":
            res = "fa fa-calendar";
            break;
        
        case "Em andamento":
            res = "fa fa-hourglass-half";
            break;

        case "Concluído":
            res = "fa fa-check";
            break;
    }
    return res;
}