import React, { Component } from 'react';
import Header from '../components/Header/Header';
import HomeCollections from '../components/Home Components/HomeCollections';
import SidebarNav from '../components/SideNav/SideNav';

class Layout extends Component {

    state = {
        showNav: false 
    }
    
    toggleSideNav = (action) =>{
        this.setState({
            showNav:action
        })
    }

    render() {
        return (
            <div>
                <Header
                    // showNav={this.state.showNav}
                    // onHideNav={()=> this.toggleSideNav(false)}
                    // onOpenNav={()=>this.toggleSideNav(true)}
                />
                <HomeCollections/>
                <SidebarNav/>
                {this.props.children}
            </div>
        )
    }
}


export default Layout;