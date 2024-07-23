import axios from "axios"
const fetch = (lat, lon) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=294b879dd3513b0c6c03248fdc07f74f`)
};
const select = (data) => {
    const temp = []
        for (let i = 0; i < 5; i++) {
            temp.push({
                main: data.list[i*8]?.weather[0].main,
                temp: data.list[i*8]?.main.temp.toString().slice(0, 4),
                iconId: data.list[i*8]?.weather[0].icon,
                time: data.list[i*8]?.dt_txt.slice(5, 10)
                })
        }
        console.log(temp)
        return temp
}
export {fetch, select}