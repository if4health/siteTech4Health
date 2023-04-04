export default function status(beginDate, endDate){
    let status;
    if(+new Date(beginDate) > + new Date()) {
        status = "A iniciar";
    } else {
        if(+new Date(endDate) < + new Date()) {
            status = "Concluído";
        } else {
            if(+new Date(endDate) > + new Date()){
                status = "Em andamento";
            }
        }
    }
    return status;
}