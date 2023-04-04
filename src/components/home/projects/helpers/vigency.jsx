export default function vigency(beginDate, endDate){
    let begin = beginDate.toString().substr(4, 11);
    let end = endDate.toString().substr(4, 11);
    
    let beginDay = begin.substr(4, 2);
    let endDay = end.substr(4, 2);

    let beginMonth = begin.substr(0, 3);
    let endMonth = end.substr(0, 3);

    let beginYear = begin.substr(7, 4);
    let endYear = end.substr(7, 4);

    function monthToNumber(month){
        let res = month;

        switch(month){
            case "Jan":
                res = "01";
                break;

            case "Feb":
                res = "02";
                break;
            
            case "Mar":
                res = "03";
                break;

            case "Apr":
                res = "04";
                break;

            case "May":
                res = "05";
                break;

            case "Jun":
                res = "06";
                break;

            case "Jul":
                res = "07";
                break;
            
            case "Aug":
                res = "08";
                break;

            case "Sep":
                res = "09";
                break;

            case "Oct":
                res = "10";
                break;

            case "Nov":
                res = "11";
                break;

            case "Dec":
                res = "12";
                break;
        }
        return res;
    }
    return `De ${beginDay}/${monthToNumber(beginMonth)}/${beginYear} á ${endDay}/${monthToNumber(endMonth)}/${endYear}`;
}