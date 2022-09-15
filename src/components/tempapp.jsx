import React, { useState ,useEffect} from 'react'
import "./style.css"

const TempApp = () => {

    const[city, setCity] = useState(null);
    const[search, setSearch] = useState('London');
    useEffect(() => {
      const fetchApi = async () => {
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=63203558c6270b9c8c4a8563d612ee35`
          const response = await fetch(url);
          const resJson = await response.json();
          setCity(resJson.main)
        //   console.log(resJson); 
                             
          
      }
      fetchApi();
      },[search])
    
    return(
        <>
        <div className='box'>
                <div className='inputData'>
                    <input 
                        type="search"
                        className="inputField"  
                        value={search}
                        onChange={ (event) => {
                            setSearch(event.target.value)
                        }}/>              
                </div>
            {!city ? (
                <p className='errorMsg'>No Data Found</p>
            ): (
            <div>
            <div className='info'>
                <h3 className='location'>
                <i className="fa-solid fa-street-view"></i>{search}
                </h3>
                <h2 className='temp'>{city.temp} °C</h2>
                <h3 className='tempmin_max'>Min: {city.temp_min} °C | Max: {city.temp_max} °C</h3>

            </div>
            <div className='wave -one'></div>
            <div className='wave -two'></div>
            <div className='wave -three'></div>
            </div>
            )}
        </div>
        </>
    )
}

export default TempApp