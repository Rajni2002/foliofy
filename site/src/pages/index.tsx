import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import Features from '@site/src/components/Features';
import Header from '@site/src/components/header';
import Navbar from '../components/navbar';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div
      title={siteConfig.title}
      className="home-bg">
      <div className="star-field" >
        <div className="layer" />
        <div className="layer" />
        <div className="layer" />
      </div>
      <Navbar />
      {/* <Header /> */}
      {/* <Features /> */}
    </div>
  );
}
