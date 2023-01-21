import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';

import {isMobile} from 'react-device-detect';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx("container", styles.centerAligned)}>
        <img src='img/logo.png' className={styles.backgroundImage}/>
        <div className={styles.text}>
          <h1 className="hero__title" style={!isMobile ? {fontSize: '5em'} : {}}>{isMobile ? "8546" : "Team Linebreak"}</h1>
          <p className="hero__subtitle">{isMobile ? "Since 2020" : "Building robots since 2020"}</p>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title={"Hello from Team Linebreak"}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
          <div className="text--center">
            <h2>More information soon to come</h2>
          </div>
      </main>
    </Layout>
  );
}
