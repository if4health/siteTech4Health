export default function insertGithub(git){
    if(git != ""){
        return <a className="btn btn-sm btn-outline-secondary" href={git} target="_blank" role="button"><i aria-hidden="true" className="fa fa-github"></i></a>
    }
  }