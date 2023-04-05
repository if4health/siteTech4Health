import NavBar from '../components/home/navbar/main';
import Description from '../components/home/description/main';
import Projects from '../components/home/projects/main';
import Professors from "../components/home/professors/main";
import Works from '../components/home/works/main';
import Students from '../components/home/students/main';
import Resources from '../components/home/resources/main';
import Footer from '../components/home/footer/main';

export default function Home(){
    return(
        <div>
            <NavBar/>
            <div className="container">
                <Description/>
                <Projects/>
                <Works/>
                <Professors/>
                <Students/>
                <Resources/>
                <Footer/>
            </div>
        </div>
    );
}