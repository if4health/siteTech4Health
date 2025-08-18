import insertEmail from "./helpers/insertEmail";
import insertLattes from "./helpers/insertLattes";
import insertLinkedin from "./helpers/insertLinkedin";
import insertGithub from "./helpers/insertGithub";

const url = `${process.env.REACT_APP_BACKEND_URL}images/students/`;

export default function renderStudents(data) {
    let list = [];

    data.forEach((e) => {
        list.push(
            <div key={e._id}>
                <div className="card card-body mb-3" style={{ userSelect: 'text' }}>
                    <h5 className="card-title">
                        <img className="rounded-circle float-left mr-3" src={url + e.mypic} alt={`foto de ${e.name}`} style={{ width: "60px", height: "60px" }} />
                        {e.name}
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted font-weight-light"> {e.quote}</h6>
                    <p className="card-text">
                        <i aria-hidden="true" className="fa fa-mortar-board text-original-dark-blue"></i> {e.tipo}<br />
                        <i aria-hidden="true" className="fa fa-check text-original-dark-blue"></i> {e.curso}<br />
                        <i aria-hidden="true" className="fa fa-calendar text-original-dark-blue"></i> {e.status}<br />
                        {insertEmail(e.email)}
                    </p>
                    <small className="text-center">
                        <div className="btn-group">
                            {insertLattes(e.lattes)}
                            {insertLinkedin(e.linkedin)}
                            {insertGithub(e.github)}
                        </div>
                    </small>
                </div>
            </div>
        );
    });
    return list;
}
