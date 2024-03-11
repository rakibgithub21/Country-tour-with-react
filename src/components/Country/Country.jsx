
import './Country.css'
const Country = ({ country }) => {
    const {capital,flags:{png}} = country
    console.log(country);
    return (
        <div className='country'>
            <h3>Name: {country.name.common}</h3>
            <h4>Capital: {capital}</h4>
            <img src={png} alt="" />
        </div>
    );
};

export default Country;