// dependencies
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// modules
import renderWorks from './renderWorks';
import timeOutMessage from "./messages/timeOut";
import loadingMessage from "./messages/loading";

export default function Main(){
    const [ works, setWorks ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ timeOut, setTimeOut ] = useState(false);
    const backendUrl = "https://if4health.herokuapp.com/";

    useEffect(() => {
            axios
                .get(`${backendUrl}works/data`, {
                    signal: AbortSignal.timeout(5000)
                })

                .then((res) => {
                    const list = renderWorks(res.data);
                    setLoading(false);
                    setWorks(list.reverse());
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
            <a name="publicacoes"></a>
            <h2>Publicações/Apresentações</h2>
            <div className="row">
                <div className="col-12 overflow-auto" style={{height: "500px"}}>   
                    <ul className="timeline">
                    {
                        works.map((i) => {
                            return(i);
                        })
                    }    
                    </ul>
                </div>
            </div>
        </section>                          
    );
}