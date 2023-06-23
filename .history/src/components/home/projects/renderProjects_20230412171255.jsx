// modules //
import status from './helpers/status';
import statusColor from './helpers/statusColor';
import statusIcon from './helpers/statusIcon';
import membersString from './helpers/membersString';
import scholarsString from './helpers/scholarsString';

const bucketUrl = "https://if4health-files.s3.sa-east-1.amazonaws.com/img/projects/";

export default function renderProjects(data){
    let key = 0;
    let list = [];

    https://if4health-files.s3.sa-east-1.amazonaws.com/img/projects/denia.jpg
    https://if4health-files.s3.sa-east-1.amazonaws.com/img/students/denia.jpg
    
    data.forEach((e) => {
        key += 1;

        list.push(
            <div className="card" key={key}>
                <div className="card-header">{e.tittle}</div>
                <img src={bucketUrl + e.mypic} loading="lazy" className="card-img-top" alt="Projeto 2021"/>
                <div className="card-body">
                    <p className="card-text">
                        {/* <span className="badge badge-pill badge-primary"><i className="fa fa-check"></i>{e.status}</span> */}
                        <span className={statusColor(status(e.beginDate, e.endDate))}><i className={statusIcon(status(e.beginDate, e.endDate))}/><i> </i>{ status(e.beginDate, e.endDate)}</span>
                        <strong> {e.tittle}</strong>
                        <p>{e.description}</p>
                    </p>
                    <p className="card-text">
                        <strong>Vigência:</strong> {"De " + e.beginDate + " até " + e.endDate}<br/> 
                        <strong>Coordenador:</strong> {e.coordinator}<br/>
                        <strong>Membros:</strong> {membersString(e)}<br/>
                        <strong>Bolsistas:</strong> {scholarsString(e)}
                    </p>
                    <div className="card-text">
                        <span className="text-original-blue font-weight-bold">Aluno do TSI ou ECA:</span>
                        <ul className="no-bullet">
                        <li> <i aria-hidden="true" className="fa fa-check text-original-blue"></i> Desenvolva seu TCC ou sua Pesquisa conosco; </li>
                        <li> <i aria-hidden="true" className="fa fa-check text-original-blue"></i> Temos varias sugestões de trabalhos; </li>
                        </ul>
                    </div><br/><br/>
                    <p className="card-text text-center">
                        <a className="btn btn-success mx-3" href="./ECA" role="button">Alunos ECA</a>
                        <a className="btn btn-success mx-3" href="./TSI" role="button">Alunos TSI</a>
                    </p>
                </div>
            </div>
        );  
    });
    return list;
}