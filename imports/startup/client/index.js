import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Routes } from './Routes.jsx';

Meteor.startup(() => ReactDOM.render(<Routes />, document.getElementById('react-root')));
