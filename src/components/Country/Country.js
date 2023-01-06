import React from 'react';
import './Country.css'

const Country = (props) => {
  // console.log(props);
  const {name, capital, area, population, region, startOfWeek, flags} = props.country
  return (
    <div className='country'>
      <h2>Name : {name.common}</h2>
      <h3>Capital : {capital}</h3>
      <h4>Area : {area} km²</h4>
      <h4>Population : {population}</h4>
      <h4>Region : {region}</h4>
      <h4>Start Of Week : {startOfWeek}</h4>
      <img src={flags.png} alt="" />
    </div>
  );
};

export default Country;