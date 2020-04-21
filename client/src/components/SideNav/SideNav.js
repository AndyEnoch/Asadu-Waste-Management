// import React from 'react';
// import SideNav from 'react-simple-sidenav';

// const SideNavivation =(props) => {
//     return (
//         <div>
//             <SideNav
//                 showNav={props.showNav}
//                 onHideNav={props.onHideNav}
//                 onOpenNav={props.onOpenNav}
//             >
//                 Options
//             </SideNav>
//         </div>
//     )
// }

// export default SideNavivation;

import Sidebar from "react-sidebar";
import React, { Component } from 'react';
import style from './SideNav.module.css';
import SidebarZ from './SideBar'

const mql = window.matchMedia(`(min-width: 800px)`);

class SidebarNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarDocked: mql.matches,
      sidebarOpen: false
    };

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }

  componentWillUnmount() {
    mql.removeListener(this.mediaQueryChanged);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  mediaQueryChanged() {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
  }


  render() {
    
    return (
        <div className={style.root} >
            <Sidebar
                className={style.root}
                sidebar= {<SidebarZ/>}
                // open={this.state.sidebarOpen}
                docked={this.state.sidebarDocked}
                onSetOpen={this.onSetSidebarOpen}
                styles={{sidebar:{background:"#e3ee48"}}}
            >
                {/* {<b className={style.sidebar}>Main content</b>} */}
            </Sidebar>
            
        </div>
      
    );
  }
}

export default SidebarNav;