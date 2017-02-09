/**
 * Layout component
 */
import React from 'react';
import Navbar from 'scripts/modules/layout/Navbar.jsx';
import Sidebar from 'scripts/modules/layout/Sidebar.jsx';

const Layout = (props) => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Sidebar />
      </div>
      <div>
        {props.children}
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default Layout;
