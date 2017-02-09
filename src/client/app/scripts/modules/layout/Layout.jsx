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
        <div className = "row">
          <div className = "col-sm-3">
            <Sidebar />
          </div>
          <div className = "col-sm-9">
            <div className = "content-wrapper">
              {props.children}
            </div>
          </div>
        </div>
    </div>
  );
};

Layout.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default Layout;
