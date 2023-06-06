// dependencies
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// modules
import renderLinks from './renderLinks';
import loadingMessage from '../../../messages/loadingMessage';
import timeOutMessage from '../../../messages/timeOutMessage';

export default function Links(){
    const [ links, setLinks ] = useState([]);
    const [ tittle, setTittle ] = useState(["Carregando..."]);
    const [ timeOut, setTimeOut ] = useState(false);
    const [ loading, setLoading ] = useState(true); 

    const backendUrl = "http://localhost:8080";
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    useEffect(() => {
        axios   
            .get(`http://localhost:8080/linkTrees/single/64384d0c99fbbe0dde5f880e`, {
                // signal: AbortSignal.timeout(10000) 
            })
        
                .then((res) => {
                    setTittle(renderLinks(res.data).tittle);
                    setLinks(renderLinks(res.data).list);
                    setLoading(false);
                })
            
            // .catch((err) => {
            //     if (axios.isCancel(err)) {
            //         setLoading(false);
            //         setTimeOut(true);
            //     }
            });
    }, []);

    loadingMessage(loading);
    timeOutMessage(timeOut);

    return(
        <section className="mt-3">
            <h2 style={{minWidth: "7.445vw"}}>{tittle}</h2>
            <div data-ride="carousel">
                { 
                    links.map((i) => {
                        return(i);
                    })
                }
            </div>
       </section>
    );
}