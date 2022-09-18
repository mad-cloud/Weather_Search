import React, { useState, useEffect } from 'react';
import '../style.css'
const Weather = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Bhopal")
    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=9a28c9694cb3c265ffbe1207985a0919`;//to add a parameter use &
            const response = await fetch(url);
            const resJson = await response.json();
            //console.log(resJson);
            setCity(resJson.main);//main parameter of openweather api contains the information about city temperature
        }
        fetchApi();
    }, [search]);//the page will be updated whenever setSearch will be rendered on typing the city name in search input box 
    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input type="search" className='inputField' onChange={(event) => {
                        setSearch(event.target.value)//gets the value inputted by the user in the input box
                    }} />
                </div>
                {!city ? (<p className='errorMsg'>No Data Found</p>) : (
                    <div>
                        <div className='info'>
                            <h2 className="location">
                                <i className='fas fa-street-view'></i>{search}
                            </h2>
                            <h1 className="temp">
                                {city.temp}°Cel {/* temp is a subparameter of main parameter that represent temperature */}
                            </h1>
                            <h3 className='tempmin_max'>Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel</h3>{/* temp_max and temp_min are the sub parameters of main parameter that represents maximum temperature and minimum temperature */}
                        </div>
                        <div className='wave -one'></div>
                        <div className='wave -two'></div>
                        <div className='wave -three'></div>
                    </div>
                )}{/* if inputted city is not present in the json data then show "No Data Found" else show the data related to a particular city */}

            </div>
        </>
    );
}

export default Weather;
