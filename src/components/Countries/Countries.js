
import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';
const Countries = () => {
    const [countries,setCountries] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div>
            <h1>Hello From Countries: {countries.length}</h1>
            <div className="countries-card">
                
            {
                countries.map(country => <Country
                key= {country.numericCode}
                country = {country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;
