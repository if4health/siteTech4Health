import Image from './image';
import Info from './info';

export default function Main(){
    return(
        <section>
            <div className="row">
                <a name="overview"></a><h2>VISÃO GERAL</h2>
                <Info/>
                <Image/>
		        <p className="card-text">
		            A seguir serão apresentadas algumas propostas de temas de trabalho de conclusão de curso que os professores do grupo IF4Health têm interesse em desenvolver pesquisas.       
                </p>
            </div>
        </section>
    );
}