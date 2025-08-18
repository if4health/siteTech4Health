// dependencies //
import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import axios from 'axios';

// modules //
import timeOutMessage from "./messages/timeOut";
import loadingMessage from "./messages/loading";
import renderStudents from "./renderStudents";
import settings from './slider/settings';

// styles //
import '../../../css/students.css';

export default function Main(){
    const [ students, setStudents ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ timeOut, setTimeOut ] = useState(false);

    const backendUrl = process.env.REACT_APP_BACKEND_URL;

    useEffect(() => {
        axios
            .get(`${backendUrl}students/data/`, {
                signal: AbortSignal.timeout(5000) 
            })

            .then((res) => {
                const list = renderStudents(res.data);
                setLoading(false);
                setStudents(list);
            })

            .catch((err) => {
                if (axios.isCancel(err)) {
                    setLoading(false);
                    setTimeOut(true);
                }
            });
    }, []);

    timeOutMessage(timeOut);
    loadingMessage(loading);

    return(
        <section className="mt-3">
            <a name="alunos"></a>
            <h2>Alunos</h2>
            <div id="alunosCarousel" data-ride="carousel">
                <Slider {...settings}>
                    {
                        students.map((i) => {
                            return(i);
                        })
                    }        
                </Slider>
            </div>
        </section>        
    );
}