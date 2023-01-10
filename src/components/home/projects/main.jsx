import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import axios from 'axios';

import { LeftOutlined, RightOutlined } from '@ant-design/icons'

export default function Main(){
    const [ cont, setCont ] = useState(0);
    const [ projects, setProjects ] = useState([]);
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
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow/>,
        nextArrow: <NextArrow/>
    }

    function membersString(obj){
        let string;
        let counter = 0;

        obj.members.forEach((e) => {
            if(counter == 0){
                string = e.name;
                counter = counter + 1;
            } else if(obj.members.lenght == counter){
                string.concat(string + `e ${e.name}`);
            } else {
                string = string + `, ${e.name}`;
                counter = counter + 1;
            }
        });
        return string;
    }

    function scholarsString(obj){
        let string;
        let counter = 0;

        obj.scholars.forEach((e) => {
            if(counter == 0){
                string = e.name;
                counter = counter + 1;
            } else if(obj.scholars.lenght == counter){
                string.concat(string + `e ${e.name}`);
            } else {
                string = string + `, ${e.name}`;
                counter = counter + 1;
            }
        });
        return string;
    }

    function statusColor(status){
        if(status == "Sendo Planejado"){
            return "badge badge-pill badge-warning";
        }

        if(status == "Em Andamento"){
            return "badge badge-pill badge-warning";
        }

        if(status == "Finalizado"){
            return "badge badge-pill badge-primary";
        }
    }

    const url = "http://teste-env.eba-x7kutucd.sa-east-1.elasticbeanstalk.com/";

    useEffect(() => {
        axios.get(`${url}projects/data`)
        .then((res) => {
            data = res.data;
            let list = [];
            let key = 0;

            data.forEach((e) => {
                key += 1;

                list.push(
                    <div className="card" key={key}>
                        <div className="card-header">{e.tittle}</div>
                        <img src={`${url}images/` + e.mypic} loading="lazy" className="card-img-top" alt="Projeto 2021"/>
                        <div className="card-body">
                            <p className="card-text">
                                {/* <span className="badge badge-pill badge-primary"><i className="fa fa-check"></i>{e.status}</span> */}
                                <span className={statusColor(e.status)}><i className="fa fa-check"></i>{e.status}</span>
                                <strong> {e.tittle}</strong>
                            </p>
                            <p className="card-text">
                                <strong>Vigência:</strong> {e.vigency}<br/> 
                                <strong>Coordenador:</strong> {e.coordinator}<br/>
                                <strong>Membros:</strong> {membersString(e)}<br/>
                                <strong>Bolsistas:</strong> {scholarsString(e)}
                            </p>
                            <div className="card-text">
                                <span className="text-original-blue font-weight-bold">Aluno do TSI ou ECA:</span>
                                <ul className="no-bullet">
                                <li> <i aria-hidden="true" className="fa fa-check text-original-blue"></i> Desenvolva seu TCC ou sua Pesquisa conosco; </li>
                                <li> <i aria-hidden="true" className="fa fa-check text-original-blue"></i> Temos varias sugestões de trabalhos; </li>
                                </ul>
                            </div><br/><br/>
                            <p className="card-text text-center">
                                <a className="btn btn-success mx-3" href="./ECA" role="button">Alunos ECA</a>
                                <a className="btn btn-success mx-3" href="./TSI" role="button">Alunos TSI</a>
                            </p>
                        </div>
                    </div>
                );  
            });
            setProjects(list);
            setCont(cont + 1);
        });
    }, []);

    return(
        <section className="mt-3">
            <a name="projetos"></a>
            <h2>Projetos</h2>
                <div id="projetosCarousel" data-ride="carousel">   
                    <Slider {...settings}>
                        {
                            cont > 0 
                            ? projects.map((i) => {
                                return(i);
                            })
                            : null
                        }        
                    </Slider>
                </div>
        </section>
    );
}