import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import Features from '@site/src/components/Features';
import Header from '@site/src/components/Header';

import styles from './index.module.css';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div
      title={siteConfig.title}
      className={clsx(styles["home-bg"])}>
      <div className={clsx(styles["star-field"])} >
        <div className={clsx(styles["layer"])} />
        <div className={clsx(styles["layer"])} />
        <div className={clsx(styles["layer"])} />
      </div>
      <Header />
      <main>
        <Features />
      </main>
    </div>
  );
}
