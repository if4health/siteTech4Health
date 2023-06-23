import NavBar from '../components/linkTrees/navbar/main';

export default function LinkTree(){
    const urlParams = new URLSearchParams(window.location.search);
    const nome = urlParams.get('id');
    console.log(nome);

    return(
        <div>
            <NavBar/>
        </div>
    )
}