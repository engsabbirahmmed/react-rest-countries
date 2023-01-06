// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}



function LoadCountries(){
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(Response => Response.json())
      .then(data => setCountries(data))
  }, [])
  return(
    <div>
      <h2>Available Countries: {countries.length}</h2>
      {
        countries.map(country => <Country name={country.name.common} official={country.name.official} capital={country.capital} region={country.region} area= {country.area} population={country.population}></Country>)
      }
    </div>
  )
}

function Country(props){
  return(
    <div className='country-div'>
      <h3>Name: {props.name}</h3>
      <h3>Official Name: {props.official}</h3>
      <h3>Capital: {props.capital}</h3>
      <h3>Region: {props.region}</h3>
      <h4>Area: {props.area} km²</h4>
      <h4>Population: {props.population}</h4>
    </div>
  )
}
export default App;