import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [countryDetails, setCountryDetails] = useState([]);
    const handleButton = (country) => {
        console.log(country);
        const newCart = [...countryDetails, country];
        setCountryDetails(newCart);
    }
    console.log(countryDetails);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    },[])

    return (
        <div>
            <div>
                {countryDetails.map(country => <li
                    key={country.cca2}
                
                >{country.name.common}</li>)}
            </div>
            <h3>Countries: {countries.length}</h3>
            <div className="countries">
                {
                    countries.map(country => <Country
                        key={country.cca2}
                        country={country}
                        handleButton={handleButton}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;