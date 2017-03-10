/**
 * Layout component
 */
import React from 'react';
import Navbar from 'scripts/modules/layout/Navbar.jsx';
import Sidebar from 'scripts/modules/layout/Sidebar.jsx';

require('scripts/modules/layout/styles/layout.scss');

const Layout = (props) => {
  return (
    <div className="wrapper">
      <div>
        <Navbar />
      </div>
      <div className="main-wrapper">
        <div className="sidebar-wrapper">
          <Sidebar />
        </div>
        <div className="content-wrapper">
          {props.children}
        </div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default Layout;
