import React, { useState } from 'react'
import WeatherDay from '../WeatherDay/WeatherDay'
import './WeatherInfo.css'

const WeatherInfo = ({ days }) => {
    const [chosenDay, setChosenDay] = useState()

    const handleChosenDay = (day) => {
        setChosenDay(day)
    }

    return (
        <>
            {chosenDay &&
                <div className='chosenDay'>
                    <h2>Day: {chosenDay.day}</h2>
                    <h2>{chosenDay.weather}</h2>
                    <img src={`/img/${chosenDay.weather}.jpg`} />
                </div>
            }
            <div className='listDays'>
                {days.map((elem) => {
                    return <WeatherDay key={elem.day} day={elem} handleChosenDay={handleChosenDay} />
                })
                }
            </div>
        </>
    )
}

export default WeatherInfo