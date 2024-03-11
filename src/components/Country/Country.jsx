
import { useState } from 'react';
import './Country.css'
const Country = ({ country }) => {
    const { capital,population,area,cca3, flags: { png }} = country
    // console.log(country);
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    }
    return (
        <div className={`country ${visited && 'bg'}`}>
            <img src={png} alt="" />
            <h3>Name: {country.name.common}</h3>
            <h4>Capital: {capital}</h4>
            <h5>Population: { population}</h5>
            <h5>Area: {area}</h5>
            <p>Code: <small>{cca3}</small></p>
            <button  onClick={handleVisited} className='button'>{visited?'Visited' :'Going'}</button>
            {visited ? 'I have visited this country':'I want to visit'}
        </div>
    );
};

export default Country;