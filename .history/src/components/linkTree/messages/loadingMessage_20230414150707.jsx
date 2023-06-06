import loadingGif from "../../../img/icons/blue_spinner.gif";

export default function loadingMessage(){
    return(
        <section>
                <div className="card">
                <img src={loadingGif} height={"100px"} width={"100px"} alt="caregando conteúdo..."/>                
            </div>
        </section>
    );
}