import { useEffect, useState } from 'react'
import foreCastData from '../mockData/foreCastData'
export default () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const temp = []
        for (let i = 0; i < 5; i++) {
            temp.push({
                main: foreCastData.list[i].weather[0].main,
                temp: foreCastData.list[i].main.temp.toString().slice(0, 4),
                iconId: foreCastData.list[i].weather[0].icon,
                time: foreCastData.list[i].dt_txt.slice(11, 16)
                })
        }
        setData(temp)
    }, [])
    return [data, setData]
}