import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import axios from 'axios';

import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import '../../../css/students.css';

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
            console.log(git)
            return <a className="btn btn-sm btn-outline-secondary" href={git} target="_blank" role="button"><i aria-hidden="true" className="fa fa-github"></i></a>
            
        }
      }

      function insertLinkedin(din){
        if(din != ""){
            console.log(din)
            return <a className="btn btn-sm btn-outline-secondary" href={din} target="_blank" role="button"><i aria-hidden="true" className="fa fa-linkedin"></i></a>
            
        }
      }

      function insertEmail(email){
        if(email != ""){
            return <a className="btn btn-sm btn-outline-secondary" href={email} target="_blank" role="button"><i aria-hidden="true" className="fa fa-envelope-o"></i> E-mail</a>
            
        }
      }


    const url = "https://backend-tq7n.onrender.com/";

    useEffect(() => {
        axios.get(`${url}students/data/`)
        .then((res) => {
            data = res.data;
            let list = [];

            data.forEach((e) => {
                list.push(
                        <div key={e._id}>
                            <div className="card card-body mb-3">
                                <h5 className="card-title">
                                    <img className="rounded-circle float-left mr-3" src={`${url}images/` + e.mypic} alt={`foto de ${e.name}`} style={{"width":"60px", "height":"60px"}}/>
                                    {e.name}
                                </h5>
                                <h6 className="card-subtitle mb-2 text-muted font-weight-light"> {e.quote}</h6>
                                <p className="card-text">
                                    <i aria-hidden="true" className="fa fa-mortar-board text-original-dark-blue"></i>{e.tipo}<br/>
                                    <i aria-hidden="true" className="fa fa-check text-original-dark-blue"></i>{e.curso}<br/>
                                    <i aria-hidden="true" className="fa fa-calendar text-original-dark-blue"></i>{e.status}<br/>
                                </p>
                                <small className="text-center">
                                    <div className="btn-group">
                                        {insertLattes(e.lattes)}
                                        {insertEmail(e.email)}
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