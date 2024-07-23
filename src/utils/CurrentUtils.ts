import axios from "axios"
const fetchCurrent = (lat, lon) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=294b879dd3513b0c6c03248fdc07f74f`)
};
const selectCurrent = (data) => {
    const currentData = data
    console.log(data)
    return {
        main: currentData.weather[0].main,
        desc: currentData.weather[0].description,
        temp: currentData.main.temp.toString().slice(0, 4),
        iconId: currentData.weather[0].icon,

        wind: currentData.wind.speed,
        humidity: currentData.main.humidity,
        pressure: currentData.main.pressure,
        feelsLike: currentData.main.feels_like.toString().slice(0, 4),
        maxTemp: currentData.main.temp_max.toString().slice(0, 4),
        minTemp: currentData.main.temp_min.toString().slice(0, 4),
        seaLevel: currentData.main.sea_level,
        grndLevel: currentData.main.grnd_level
    }}


export {fetchCurrent, selectCurrent}