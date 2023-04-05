import image from '../../../img/posters/IdeiasTCC.png';

export default function Image(){
    return(
        <div className="card">
            <img src={image} loading="lazy" className="card-img-top" alt="Cloud RCG overview"/>
	    </div>	 
    );
}