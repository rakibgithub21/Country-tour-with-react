
import './Country.css'
const Country = ({ country, }) => {
    const { capital,population,area, flags: { png }} = country
    console.log(country);
    return (
        <div className='country'>
            <h3>Name: {country.name.common}</h3>
            <h4>Capital: {capital}</h4>
            <h5>Population: { population}</h5>
            <h5>Area: { area}</h5>
            <img src={png} alt="" />
        </div>
    );
};

export default Country;