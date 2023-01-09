import image from '../../../img/icons/overview.jpeg';

export default function ExtraImage(){
    return(
        <div className="card">
            <img src={image} loading="lazy" className="card-img-top" alt="Cloud RCG overview"/>
        </div>
    );
}