import React, { useState } from 'react'
import './States.css'

const States = () => {

    const [state, setState] = useState('red')
    const [mouse, setMouse] = useState(false)

    const handleNewState = () => {
        setState('blue')
    }

    const onMouseIn = () => {
      setMouse(true)
    }

    const onMouseOut = () => {
      setMouse(false)
    }

  return (
    <div className='states'>
        <h3>Ejercicio 3.5</h3>
        <button onClick={handleNewState} style={{backgroundColor:`${state}`}}>Click me!<br/>I'm {state}</button>
        <div onMouseLeave={onMouseOut} onMouseEnter={onMouseIn} className='divState'>Soy un div!</div>
        <div className={`${mouse}`}>Inside!</div>

    </div>
  )
}

export default States