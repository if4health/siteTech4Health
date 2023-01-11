import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Main(){
    const [ cont, setCont ] = useState(0);
    const [ works, setWorks ] = useState([]);
    let data;

    let key = 0;

    function getAuthors(authorsArray){
        let counter = 0;
        let authors = "";
        let cleanedArray = [];

        authorsArray.forEach((e) => {
          cleanedArray.push(e.name);
        });
      
        cleanedArray.forEach((e) => {
          if(authors == ""){
            authors = authors + e
            counter += 1;
          }
          else {
            authors = authors + ", " + e;
            counter += 1;
          }
        });

        return authors;
      }

    const url = "http://teste-env.eba-x7kutucd.sa-east-1.elasticbeanstalk.com/";

    // useEffect(() => {
    //     axios.get(`${url}works/data`)
    //     .then((res) => {
    //         data = res.data;
    //         let list = [];
            
    //         data.forEach((e) => {
    //             let month;
    //             const months = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"];
    //             month = months[e.month - 1];
    //             key = key + 1;

    //             list.push(
    //                 <div key={key}>
    //                     <span className="badge badge-pill badge-success font-medium">{month + "/" + e.year}</span>
    //                     <li>
    //                         <h5 className="text-original-dark-blue">
    //                             {e.titulo} 
    //                         </h5>
    //                         <p className="card-text">
    //                             <span className="text-muted font-weight-light">
    //                                 {e.local}
    //                             </span><br/>
    //                             Apresentação: <strong>{getAuthors(e.authors)}</strong>
    //                             <br/>   
    //                             <br/>
    //                         </p>
    //                     </li>
    //                 </div>
    //             );  
    //         });
    //         setWorks(list);
    //         setCont(cont + 1);
    //     });
    // }, []);

    return(
        <section className="mt-3">
            <a name="publicacoes"></a>
            <h2>Publicações/Apresentações</h2>
            <div className="row">
                <div className="col-12 overflow-auto" style={{height: "500px"}}>   
                    <ul className="timeline">
                    {
                        cont > 0 
                        ? works.map((i) => {
                            return(i);
                        })
                        : null
                    }    
                    </ul>
                </div>
            </div>
        </section>                          
    );
}