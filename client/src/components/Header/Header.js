import React from 'react';
import style from '../../components/Header/Header.module.css';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faSearch, faBell} from '@fortawesome/free-solid-svg-icons';
import SidebarNav from '../SideNav/SideNav';

const Header =(props)=> {
        const logo = ()=>{
            return(
                <Link to='home'><img src="../src/images/logo1.jpg" height="42px" width="42px"/></Link>
            )
            
        }

        // const sidebar = () => {
        //     return(
        //         <div>
        //             <SidebarNav/>
        //         </div>
                
        //     )
        // }

        const navBars = () =>{
            return(
                <div>
                    <span className={style.menu}>
                        <FontAwesomeIcon icon={faBars} size="lg"
                            onClick={props.onOpenNav}
                            style={{
                                color:'#dfdfdf',
                                padding:'30px',
                                cursor:'pointer'
                            }}
                        />
                    </span>
                    <span className={style.navbar}>
                            <Link><FontAwesomeIcon
                            icon={faSearch} size="lg"
                            style={{
                                color:'#dfdfdf',
                                padding:'10px',
                                cursor:'pointer'
                            }}/></Link>
                            <Link><FontAwesomeIcon
                            icon={faBell} size="lg"
                            style={{
                                color:'#dfdfdf',
                                padding:'10px',
                                cursor:'pointer'
                            }}
                        
                        /></Link>
                    </span>
                
            </div>
            )
            
        }
        return (
            <div className={style.header}>
                {/* <header > */}
                {/* <SidebarNav {...props}/> */}
                {/* <div className={style.headerOpt}> */}
                    

                    {logo()}
                    {navBars()}
                    
                    
                    
                {/* </div> */}
            {/* </header> */}
            </div>
            
            
        )
    
}

export default Header;