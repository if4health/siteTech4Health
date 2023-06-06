// dependencies
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// modules
import renderLinks from './renderLinks';
import loadingMessage from '../../messages/loadingMessage';
import timeOutMessage from '../../messages/timeOutMessage';

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
                const list = renderLinks(res.data);
                setLoading(false);
                setSites(list);
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
                    sites.map((i) => {
                        return(i);
                    })
                }
        </section>
    );
}