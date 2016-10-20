import React from 'react';
import { Header } from './Header/Header.jsx';
import { NavigationBar } from './Header/NavigationBar.jsx';
/*
 * It will only display the Header in which App Header and Navigation Bar Will be diplayed
 */
export const Header = () => (
    <div>
      <Header />
      <NavigationBar />
    </div>
);
