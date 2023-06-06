// dependencies
import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import axios from 'axios';

export default function Links(){
    const backendUrl = "http://localhost:8080/"

    useEffect(() => {
        axios   
            .get(`${backendUrl}linkTrees/data/`, {
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

    return(
        <>
        </>
    );
}