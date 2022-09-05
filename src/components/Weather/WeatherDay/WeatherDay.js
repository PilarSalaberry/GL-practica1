import React from 'react'
import './WeatherDay.css'

const WeatherDay = ({day, handleChosenDay}) => {

   return (
    <div onClick={()=>handleChosenDay(day)} className="dayBox">
        <h3>{day.day}</h3>
        <p>{day.weather}</p>
    </div>
  )
}

export default WeatherDay