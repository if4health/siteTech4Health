export default function statusColor(status){
    let res;
    switch(status){
        case "A iniciar":
            res = "badge badge-warning";
            break;
        
        case "Em andamento":
            res = "badge badge-warning";
            break;

        case "Concluído":
            res = "badge badge-primary";
            break;
    }
    return res;
}