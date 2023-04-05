export default function insertEmail(email){
    if(email != ""){
        return(
            <>
                <i aria-hidden="true" className="fa fa-envelope text-original-dark-blue"/><i style={{"fontSize":"15px", "fontFamily":"arial", "textDecoration":"none"}}> { email}</i> 
            </>
        )
    }
}