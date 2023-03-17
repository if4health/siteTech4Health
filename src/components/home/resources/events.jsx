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
                <iframe id={"calendarCharq"} src={"https://clients6.google.com/calendar/v3/calendars/c_dpgongvtjp89fth1a1q6cs8ffk@group.calendar.google.com/events?calendarId=c_dpgongvtjp89fth1a1q6cs8ffk%40group.calendar.google.com&singleEvents=true&timeZone=America%2FSao_Paulo&maxAttendees=1&maxResults=250&sanitizeHtml=true&timeMin=2023-02-26T00%3A00%3A00-03%3A00&timeMax=2023-04-02T00%3A00%3A00-03%3A00&key=AIzaSyBNlYH01_9Hc5S1J9vuFmu2nUqBZJNAXxs "} height={'360'} scrolling={'no'} frameBorder={'0'}>
                </iframe>
            </div>
        </div>
    );
}

{/* <iframe id="calendarCharq" src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%…pwODlmdGgxYTFxNmNzOGZma0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23E67C73" height="360" scrolling="no" frameborder="0" allowtransparency="true"></iframe> */}