import React from 'react';
import './Country.css';

const Country = (props) => {
    const {flag,name,capital,region} = props.country ;
    return (
        <div className="card">
            <img src={flag} alt="" />
            <h3>Name: {name}</h3>
            <h4>Capital: {capital}</h4>
            <h4>Region: {region}</h4>
        </div>
        
    );
};

export default Country;