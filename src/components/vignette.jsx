import React from 'react';
import { Link } from 'react-router-dom';

const Vignette = (props) => {
  return (<div className="card">
        <Link to={`/pays/${props.pays.alpha3Code}`} key={props.pays.alpha3Code} ><img className="drapeau" alt="drapeau" src={`${props.pays.flag}`} />
        </Link>   
        <div className="paysinfo">
            <h2>{`${props.pays.name}`}</h2>
            <p><b>Population</b>: {`${props.pays.population}`}</p>
            <p><b>Region</b>: {`${props.pays.region}`}</p>
            <p><b>Capital</b>: {`${props.pays.capital}`}</p>
        </div>
       
            
  </div>);
};


export default Vignette;