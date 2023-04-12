// dependencies
import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import axios from 'axios';

// modules
import loadingMessage from '../projects/messages/loading';
import timeOutMessage from '../projects/messages/timeOut';
import renderProjects from  "./renderProjects";
import settings from '../projects/slider/settings';

export default function Main(){
    const [ projects, setProjects ] = useState([]);
    const [ timeOut, setTimeOut ] = useState(false);
    const [ loading, setLoading ] = useState(true);

    const backendUrl = "https://testeif4health.herokuapp.com/";

    useEffect(() => {
        axios
            .get(`${backendUrl}projects/data/`, {
                 signal: AbortSignal.timeout(5000) 
            })

            .then((res) => {
                const list = renderProjects(res.data);
                setLoading(false);
                setProjects(list);
            })

            .catch((err) => {
                if (axios.isCancel(err)) {
                  setLoading(false);
                  setTimeOut(true);
                }
            });
    }, []);

    loadingMessage(loading);
    timeOutMessage(timeOut);

    return(
        <section className="mt-3">
            <a name="projetos"></a>
            <h2>Projetos</h2>
                <div id="projetosCarousel" data-ride="carousel">   
                    <Slider {...settings}>
                        {
                            projects.map((i) => {
                                return(i);
                            })
                        }        
                    </Slider>
                </div>
        </section>
    );
}