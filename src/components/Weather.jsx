import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useState } from 'react';



export default function Weather() {
    let [city, setCity] = useState("");
    let [weatherData, setWeatherData] = useState({})

    const URL = "https://api.openweathermap.org/data/2.5/weather";
    const URl_KEY = "2a7554dd35be0a2bcba515eab869d26c";


    let getInfo = async () => {
        let response = await fetch(`${URL}?q=${city}&appid=${URl_KEY}&units=metric`);
        let jsonRes = await response.json();
        // console.log(jsonRes);

        let result = {
            city : city,
            temp: jsonRes.main.temp,
            tempMin: jsonRes.main.temp_min,
            tempMax: jsonRes.main.temp_max,
            humidity: jsonRes.main.humidity,
            feelslike: jsonRes.main.feels_like,
            weather: jsonRes.weather[0].description,
        }
        setWeatherData(result);
    }



    let changeCity = (e) => {
        setCity(e.target.value);
    }
    let submitForm = async(e) => {
        e.preventDefault();
        getInfo();
        setCity("");
    }
    return (
        <div className='WeatherBox' style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <h1>Weather Report of Any City</h1>
            <br></br>
            <form style={{ textAlign: "center" }} onSubmit={submitForm}>
                <TextField id="outlined-basic" label="City Name" size="small" value={city} required onChange={changeCity} />
                <br /><br />
                <Button variant="contained" type='submit'>
                    Search
                </Button>
            </form>

            <div className='cityInfo'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="./public/weather.webp"
                        title="green iguana"
                    />
                    <CardContent style={{width:"300px"}}>
                        <Typography gutterBottom variant="h5" component="div">
                            {weatherData.city}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                           <p>Temperature : {weatherData.temp}</p>
                           <p>Min Temp : {weatherData.tempMin}</p>
                           <p>Max Temp : {weatherData.tempMax}</p>
                           <p>Humidity : {weatherData.humidity}</p>
                           <p>Feels Like : {weatherData.feelslike}</p>
                           <p>Weather : {weatherData.weather}</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}