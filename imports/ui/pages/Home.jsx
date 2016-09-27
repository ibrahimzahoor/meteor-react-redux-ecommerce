import React from 'react';

const HomePage = () => (
  <div>
    <p><strong>Error [404]</strong>: { window.location.pathname } does not exist.</p>
  </div>
);

HomePage.propTypes = {
  children: React.PropTypes.element,
};

export default HomePage;
