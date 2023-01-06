import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])
    const url = 'https://restcountries.com/v3.1/all'
    useEffect(() => {
        fetch(url)
            .then(Response => Response.json())
            .then(data => setCountries(data))
    },[])
    return (
        <div className='countries'>
            <h2>This is from countries</h2>
            <h3>Total Countries: {countries.length}</h3>

            {/* {
                countries.map(country => console.log(country))
            } */}

            {/* {
                countries.map(country => <Country name={country.name.common} capital={country.capital} area={country.area} population ={country.population} region={country.region} startOfWeek={country.startOfWeek}></Country>)
            } */}

            <div className='countries-container'>
                {
                    countries.map(country => <Country country = {country} key = {country.cca3}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;