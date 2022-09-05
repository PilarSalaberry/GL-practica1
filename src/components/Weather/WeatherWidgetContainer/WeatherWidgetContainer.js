import React from 'react'
import WeatherInfo from '../WeatherInfo/WeatherInfo'


const WeatherWidgetContainer = () => {

    const days = [
        {day: 1, weather: 'sunny'},
        {day: 2, weather: 'cloudy'},
        {day: 3, weather: 'rainy'},
        {day: 4, weather: 'windy'},
        {day: 5, weather: 'snowy'}
    ]
    return (
    <div>
        <WeatherInfo days={days}/>
    </div>
  )
}

export default WeatherWidgetContainer