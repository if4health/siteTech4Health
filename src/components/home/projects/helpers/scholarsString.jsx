export default function scholarsString(obj){
    let string;
    let counter = 0;

    obj.scholars.forEach((e) => {
        if(counter == 0){
            string = e.name;
            counter = counter + 1;
        } else if(obj.scholars.lenght == counter){
            string.concat(string + `e ${e.name}`);
        } else {
            string = string + `, ${e.name}`;
            counter = counter + 1;
        }
    });
    return string;
}