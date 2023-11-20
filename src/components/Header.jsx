import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faCircleUser} from '@fortawesome/free-solid-svg-icons'
import './Header.scss'
const Header = (props) => {
    return (
        <header>
            <nav>
                <a href="#"><img src="" alt="logo" /></a>
                <div className='Navigation'>
                    <a href="#">Услуги</a>
                    <a href="#">Контакты</a>
                    <a href="#"><FontAwesomeIcon icon={faBagShopping} /></a>
                    <a href="#"><FontAwesomeIcon icon={faCircleUser} /></a>
                </div>
            </nav>
            <div className='Text'>
                <div className="Title">
                    <h1>{props.title}</h1>
                </div>
                <div className="Description">
                    <p>{props.description}</p>
                </div>
            </div>
        </header>
    )
}

export default Header