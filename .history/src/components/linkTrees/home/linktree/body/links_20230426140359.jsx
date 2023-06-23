// dependencies
import React, { useState, useEffect } from 'react';
import axios from 'axios';
require('dotenv').config()

// modules
import renderLinks from './renderLinks';
import loadingMessage from '../../../messages/loadingMessage';
import timeOutMessage from '../../../messages/timeOutMessage';

export default function Links(){
    // React UseStates //
    const [ links, setLinks ] = useState([]);
    const [ tittle, setTittle ] = useState(["Carregando..."]);
    const [ timeOut, setTimeOut ] = useState(false);
    const [ loading, setLoading ] = useState(true); 

    // General Vars //
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const id = params.get("id");

    // Main Code //
    useEffect(() => {
        axios   
            .get(`${process.env.BAC}/linkTrees/single/${id}`, {
                signal: AbortSignal.timeout(5000) 
            })
        
                .then((res) => {
                    setTittle(renderLinks(res.data.links).tittle);
                    setLinks(renderLinks(res.data.links).list);
                    setLoading(false);
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