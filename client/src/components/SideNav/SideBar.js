import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faUser, faCogs, faTasks} from '@fortawesome/free-solid-svg-icons';
import style from './SideBar.module.css'

const SideBarZ =() => {
    return (
        <div className={style.optional}  >
            <div className={style.option}> 
                <Link to='/'>
                    <FontAwesomeIcon icon={faHome} size="lg"/>Home Content 
                </Link>
            </div>
            <div className={style.option}>
                <Link to='/'>
                    <FontAwesomeIcon icon={faUser} size="lg"/>Users
                </Link>
            </div>
            <div className={style.option}>
                <Link to='/'>
                    <FontAwesomeIcon icon={faTasks} size="lg"/>Tasks
                </Link>
            </div>
            <div className={style.option}>
                <Link to='/'>
                    <FontAwesomeIcon icon={faCogs} size="lg"/>Settings
                </Link>
            </div>
            
            
            
        </div>
    )
}

export default SideBarZ;