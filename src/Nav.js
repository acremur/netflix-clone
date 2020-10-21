import React, { useState, useEffect } from 'react'
import './Nav.css'

function Nav() {

    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false)
        })

        return () => {
            window.removeEventListener('scroll')
        }
    }, [])
    
    return (
        <div className={`nav ${show  && "nav__black"}`}>
            <img 
                className='nav__logo'
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                alt="Netflix Logo"
            />  
            <img 
                className='nav__avatar'
                src="data:image/png;base64,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" 
                alt="Netflix Logo"
            />           
        </div>
    )
}

export default Nav
