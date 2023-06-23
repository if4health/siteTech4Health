import sad from "../../../img/icons/sad.png";

export default function timeOutMessage(){
    return(
        <div className="card">
            <div className="card-header">
            </div>
            <div className='d-flex justify-content-center align-items-center'>
                <img src={sad} loading="lazy" height={"300px"} width={"300px"} alt="desculpe"/>
            </div>
            <div className="card-body">
                <strong>
                    Não foi possível carregar os projetos
                </strong>
                <p className="card-text">
                    Verifique se sua conexão com a internet está realmente boa, caso mesmo esteja e o erro continue por favor nos informe através do email:<br/>
                    andremartins@ifsul.edu.br
                </p>
            </div>
        </div>
    )
}