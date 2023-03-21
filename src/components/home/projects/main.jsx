import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import axios from 'axios';

import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import sad from "../../../img/icons/sad.png";

import vigency from '../../../hooks/vigency';
import status from '../../../hooks/status';
import statusColor from '../../../hooks/statusColor';
import statusIcon from '../../../hooks/statusIcon';

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

    const url = "https://testeif4health.herokuapp.com/";

    useEffect(() => {
        axios.get(`${url}projects/data`)
        .then((res) => {
            data = res.data;
            let list = [];
            let key = 0;

            if(data.length == 0) {
                list.push(
                    <div className="card" key={key}>
                        <div className="card-header"><strong>Não foi possível carregar os projetos</strong></div>
                        <img src={sad} loading="lazy" height={"500rem"} width={"25rem"} className="card-img-top" alt="desculpe"/>
                        <div className="card-body">
                            <p className="card-text">
                            Parece que há algo de errado nos nossos servidores, por favor nos informe sobre o erro através do seguinte email:
                            </p>
                            <p className="card-text">
                            andremartins@ifsul.edu.br
                            </p>
                        </div>
                    </div>
                );  
            }

            data.forEach((e) => {
                key += 1;

                list.push(
                    <div className="card" key={key}>
                        <div className="card-header">{e.tittle}</div>
                        <img src={`${url}images/` + e.mypic} loading="lazy" className="card-img-top" alt="Projeto 2021"/>
                        <div className="card-body">
                            <p className="card-text">
                                {/* <span className="badge badge-pill badge-primary"><i className="fa fa-check"></i>{e.status}</span> */}
                                <span className={statusColor(status(e.beginDate, e.endDate))}><i className={statusIcon(status(e.beginDate, e.endDate))}/><i> </i>{ status(e.beginDate, e.endDate)}</span>
                                <strong> {e.tittle}</strong>
                                <p>{e.description}</p>
                            </p>
                            <p className="card-text">
                                <strong>Vigência:</strong> {vigency(e.beginDate, e.endDate)}<br/> 
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