// dependencies
import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import axios from 'axios';

export default function Links(){
    const [ sites, setSites ] = useState(undefined);
    const [ timeOut, setTimeOut ] = useState(false);
    const [ loading, setLoading ] = useState(true); 

    const backendUrl = "http://localhost:8080/";

    useEffect(() => {
        axios   
            .get(`${backendUrl}linkTrees/data/`, {
                 signal: AbortSignal.timeout(5000) 
            })
        
            .then((res) => {
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
            <a name="linktree"></a>
            <h2>Link Trees</h2>
                {
                    projects.map((i) => {
                        return(i);
                    })
                }
        </section>
    );
}