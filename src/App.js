import './App.css';
import React from 'react';
import axios from "axios";

const App = () => {
    const [city, setCity] = React.useState('');
    const [temp, setTemp] = React.useState('0');

    const submitForm = e => {
        e.preventDefault();
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=283ceebfe4e85c65eff91264b4e0411f&units=metric`;

        axios.get(url)
            .then(res => {
                console.log(res);
                setTemp(res.data.main.temp);
            })
    };

    return (

        <div className="page">

            <div className="box">

                <form onSubmit={submitForm} className="weather-form">

                    <label htmlFor="city">City name: </label>

                    <input type="text" id="city" placeholder="Type a city" value={city}
                           onChange={e => setCity(e.target.value)}/>

                    <button className="weather-button">Get temperature</button>

                </form>

                <div className="temp">

                    {temp} ℃

                </div>

            </div>

        </div>

    );
};
export default App;