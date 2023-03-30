import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import axios from 'axios';

import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import '../../../css/students.css';
import sad from "../../../img/icons/sad.png";

export default function Main(){
  const [ cont, setCont ] = useState(0);
  const [ students, setStudents ] = useState([]);
    let data;

    const NextArrow = props => {
        const { className, style, onClick } = props
        return (
            <RightOutlined 
              className={className}
            
              style={{
                ...style,
                color: 'black',
                fontSize: '15px',
                lineHeight: '1.5715'
              }}

              onClick={onClick}
            />
        )
      }

    const PrevArrow = props => {
        const { className, style, onClick } = props
        return (
            <LeftOutlined 
              className={className}
            
              style={{
                ...style,
                color: 'black',
                fontSize: '15px',
                lineHeight: '1.5715'
              }}
              
              onClick={onClick}
            />
        )
      }

    let settings = {
        infinite: true,
        draggable: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 800,
        adaptiveHeight: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        //arrows: false,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1
                }
            }
        ],
        prevArrow: <PrevArrow/>,
        nextArrow: <NextArrow/>
      };

      function insertLattes(lattes){
        if(lattes != ""){
            return <a className="btn btn-sm btn-outline-secondary" href={lattes} target="_blank" role="button">Lattes »</a>            
        }
      }

      function insertGithub(git){
        if(git != ""){
            return <a className="btn btn-sm btn-outline-secondary" href={git} target="_blank" role="button"><i aria-hidden="true" className="fa fa-github"></i></a>
        }
      }

      function insertLinkedin(din){
        if(din != ""){
            return <a className="btn btn-sm btn-outline-secondary" href={din} target="_blank" role="button"><i aria-hidden="true" className="fa fa-linkedin"></i></a>
        }
      }

      function insertEmail(email){
        if(email != ""){
            return(
                <>
                    <i aria-hidden="true" className="fa fa-envelope text-original-dark-blue"/><i style={{"fontSize":"15px", "fontFamily":"arial", "textDecoration":"none"}}> { email}</i> 
                </>
            )

        }
      }


    const backendUrl = "https://testeif4health.herokuapp.com/";
    const bucketUrl = "https://if4health.s3.sa-east-1.amazonaws.com/img/students/";

    useEffect(() => {
        axios.get(`${backendUrl}students/data/`)
        .then((res) => {
            data = res.data;
            let list = [];

            if(data.length == 0) {
                list.push(
                    <div className="card card-body mb-3">
                        <h5 className="card-title">
                            <img className="rounded-circle float-left mr-3" src={sad} alt="Algo deu errado" style={{"width":"60px", "height":"60px"}}/>
                        </h5>
                        <h6 className="card-subtitle mb-2 font-weight-light">Algo deu errado</h6>
                        <p className="text-justify card-text"><br/><br/>
                            <i aria-hidden="true">Parece que há algo de errado nos nossos servidores, por favor nos informe sobre o erro através do seguinte email:</i><br/><br/>
                            <i aria-hidden="true" className="text-original-dark-blue text-justify">andremartins@ifsul.edu.br</i><br/><br/>
                            <i aria-hidden="true">Nos desculpe pela incoveniência</i><br/>
                        </p>
                    </div>
                );  
            }

            data.forEach((e) => {
                list.push(
                        <div key={e._id}>
                            <div className="card card-body mb-3">
                                <h5 className="card-title">
                                    <img className="rounded-circle float-left mr-3" src={bucketUrl + e.mypic} alt={`foto de ${e.name}`} style={{"width":"60px", "height":"60px"}}/>
                                    {e.name}
                                </h5>
                                <h6 className="card-subtitle mb-2 text-muted font-weight-light"> {e.quote}</h6>
                                <p className="card-text">
                                    <i aria-hidden="true" className="fa fa-mortar-board text-original-dark-blue"></i> {e.tipo}<br/>
                                    <i aria-hidden="true" className="fa fa-check text-original-dark-blue"></i> {e.curso}<br/>
                                    <i aria-hidden="true" className="fa fa-calendar text-original-dark-blue"></i> {e.status}<br/>
                                    {insertEmail(e.email)}
                                </p>
                                <small className="text-center">
                                    <div className="btn-group">
                                        {insertLattes(e.lattes)}
                                        {insertLinkedin(e.linkedin)}
                                        {insertGithub(e.github)}
                                    </div>
                                </small>
                            </div>
                        </div>
                );  
            });
            setStudents(list);
            setCont(cont + 1);
        });
    }, []);

    return(
        <section className="mt-3">
            <a name="alunos"></a>
            <h2>Alunos</h2>
            <div id="alunosCarousel" data-ride="carousel">
                <Slider {...settings}>
                    {
                        cont > 0 
                        ? students.map((i) => {
                            return(i);
                        })
                        : null
                    }        
                </Slider>
            </div>
        </section>        
    );
}