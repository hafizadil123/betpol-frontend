/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import ErrorBoundary from '../../components/ErrorBoundary/errorBoundary';
import NavBar  from '../../components/navbar';
import Carousal from '../../components/carousal';
 const HomePage = () => {
  
  return (
    <h1>
      <ErrorBoundary>
        <NavBar />
        <Carousal />
      </ErrorBoundary>
    </h1>
  );
}
export default HomePage;
