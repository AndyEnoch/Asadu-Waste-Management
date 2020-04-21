import React, { Component } from 'react';
import style from './AdminLogin.module.css'
import Layout from './HOC/Layout';
import {Link} from 'react-router-dom';

 class AdminLogin extends Component {

     handleEvent = (props)=>{
        return(
            <Layout/>
        )
    }

    render() {
        return (
            
            <div className={style.background}>
                
                        <h1>Login Here</h1>
                
                    
                        <form >
                            {/* <h3>Login</h3> */}
                            <div className = {style.formElement}>
                                {/* <label>Username</label> */}
                                <input type="text" placeholder="Username"/>
                            </div>
                            <div className =  {style.formElement}>
                                {/* <label>Password</label> */}
                                <input type="password" placeholder="Password"/>
                            </div>
                            <Link to="home"><button type="submit" onClick={this.handleEvent}>Sign In</button></Link>
                        </form>
                    
                    
                
            </div>
            
        )
    }
}

export default AdminLogin;