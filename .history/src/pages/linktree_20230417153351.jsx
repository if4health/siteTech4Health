import NavBar from '../components/linkTrees/navbar/main';

export default function LinkTree(){
    const urlParams = new URLSearchParams(window.location.search);
    const nome = urlParams.get('nome');
    console.log(nome); // irá imprimir "Joao" no console

    return(
        <div>
            <NavBar/>
        </div>
    )
}