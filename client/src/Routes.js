import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import AdminLogin from './AdminLogin';
import Layout from './HOC/Layout';
import SideBarZ from './components/SideNav/SideBar';
import SidebarNav from './components/SideNav/SideNav';
import Sidebar from 'react-sidebar';

class Routes extends Component {
    render() {
        return (
            <div>
                
                    <Switch>
                        <Route path='/' exact component={AdminLogin}/>
                        <Route path='/home' exact component={Layout}/>
                        {/* <Route path='/sidebar' exact component={Sidebar}/> */}

                    </Switch>
                

            </div>
        )
    }
}


export default Routes;