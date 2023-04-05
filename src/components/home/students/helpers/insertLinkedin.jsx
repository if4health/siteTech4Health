export default function insertLinkedin(din){
    if(din != ""){
        return <a className="btn btn-sm btn-outline-secondary" href={din} target="_blank" role="button"><i aria-hidden="true" className="fa fa-linkedin"></i></a>
    }
}