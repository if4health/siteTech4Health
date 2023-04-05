export default function Events(){
    return(
        <div className="col-md-4">
            <div className="card text-center mt-3">
                <div className="card-body">
                    <h5 className="card-title text-original-dark-blue"><i className="fa fa-calendar fa-2x" aria-hidden="true"></i></h5>
                    <h6 className="card-subtitle mb-2 text-muted">Eventos</h6>
                    <p className="card-text">
                        Deadlines e datas dos eventos alvo que Grupo IF4Health deseja submeter trabalhos acadêmicos
                    </p>
                </div>
                <iframe id={"calendarCharq"} src={"https://calendar.google.com/calendar/embed?src=c_dpgongvtjp89fth1a1q6cs8ffk%40group.calendar.google.com&ctz=America%2FSao_Paulo"} height={'360'} scrolling={'no'} frameBorder={'0'}>
                </iframe>
            </div>
        </div>
    );
}