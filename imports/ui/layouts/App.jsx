import React from 'react';

const App = ({ children }) => (
  <div className="ui card">
    <div className="image">
      <img src="https://camo.githubusercontent.com/f28b5bc7822f1b7bb28a96d8d09e7d79169248fc/687474703a2f2f692e696d6775722e636f6d2f4a65567164514d2e706e67" />
    </div>
    <div className="content">
      <a className="header">Kristy</a>
      <div className="meta">
        <span className="date">Joined in 2013</span>
      </div>
      <div className="description">
        Kristy is an art director living in New York.
      </div>
    </div>
    <div className="extra content">
      <a>
        <i className="user icon"></i>
        22 Friends
      </a>
    </div>
  </div>
);

App.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default App;
