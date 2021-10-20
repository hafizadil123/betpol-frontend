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
import VideoSection from '../../components/videos'
export default function HomePage() {
  return (
    <h1>
      <ErrorBoundary>
        <NavBar />
        <Carousal />
        <VideoSection />
      </ErrorBoundary>
    </h1>
  );
}
