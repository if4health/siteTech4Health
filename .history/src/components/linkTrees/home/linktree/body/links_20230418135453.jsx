// dependencies
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// modules
import renderLinks from './renderLinks';
import loadingMessage from '../../../messages/loadingMessage';
import timeOutMessage from '../../../messages/timeOutMessage';

export default function Links(){
    const [ links, setLinks ] = useState([]);
    const [ timeOut, setTimeOut ] = useState(false);
    const [ loading, setLoading ] = useState(true); 

    const backendUrl = "http://localhost:8080";
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    useEffect(() => {
        axios   
            .get(`${backendUrl}/linkTrees/data`, {
                signal: AbortSignal.timeout(5000) 
            })
            
            .then((res) => {
                const list = renderLinks(res.data.list);
                console.log("list);
                setLoading(false);
                // setLinks(list);
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
                { 
                    links.map((i) => {
                        return(i);
                    })
                }
        </section>
    );
}