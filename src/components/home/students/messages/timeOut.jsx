import sad from "../../../../img/icons/sad.png";

export default function timeOutMessage(trigger){
    if(trigger) {
        return(
            <section className="mt-3">
                <a name="alunos"></a>
                <h2>Alunos</h2>
                <div className="row">
                    <div>
                        <div className="card card-body mb-3">
                            <h5 className="card-title">
                                <img className="rounded-circle float-left mr-3" src={sad} alt={`oh não...`} style={{"width":"60px", "height":"60px"}}/>
                                {"Algo deu errado"}
                            </h5>
                            <small className="text-justify">
                                    Sua conexão com a internet não parece muito<br/>
                                    boa, verifique a qualidade da sua conexão e<br/>
                                    caso o erro persista, por favor nos contate<br/>
                                    pelo nosso email:<br/><br/>
                            </small>
                            <small className='text-center'>
                                <strong>
                                    {"andremartins@ifsul.edu.br"}
                                </strong>
                            </small>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}