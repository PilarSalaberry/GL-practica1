import React from 'react'
import './Styles.css'

const Styles = () => {
  return (
    <div className='container'>
    <header className='container container--header'>
        <div className='container__header container--logo'>LOGO</div>
        <div className='container__header container--heading'>Website Heading</div>
    </header>
    <div className='container container--menu'>MENU</div>
    <div className='container container--cards'>
        <div className='container__card card--1'>SECTION 1</div>
        <div className='container__card card--2'>SECTION 2</div>
        <div className='container__card card--3'> SECTION 3</div>
    </div>
    <div className='container container--body'>
        <div className='container__body container__body--page'>PAGE CONTENTS</div>
        <div className='container__body container__body--side'>SIDE BAR</div>
    </div>
    <footer className='container container--footer'>PAGE FOOTER</footer>
    
    
    </div>
  )
}

export default Styles