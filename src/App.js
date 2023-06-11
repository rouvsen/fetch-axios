import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [country, setCountry] = useState([]);

  useEffect(() => {
    const getAllCountries = async() => {
        const countries = await axios.get('https://restcountries.com/v3.1/all');
        setCountry(countries);
    }
    getAllCountries();
  }, [])

  console.log("country", country);

  return (
    <>
      <h1 style={{border: "2px solid blue", backgroundColor: "orange"}}>Countries' name</h1>

      {
       country?.data?.map((el, i) => (
          <div style={{border: "1px solid red", backgroundColor: "yellow"}} key={i}>{el.name.common}</div>
       ))
      }

    </>
  )

}

export default App;
