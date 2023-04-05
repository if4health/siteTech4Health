import image from '../../../img/icons/samira.jpg';

export default function Image(){
    return(
        <div className="col-auto">
            <img src={image} alt="Campus Charqueadas - imagem do card" className="img-fluid-test"/>
        </div>
    );
}