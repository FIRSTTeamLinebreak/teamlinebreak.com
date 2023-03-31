import React, { useEffect } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';

if(!process.env.IG_ACCESS_KEY) {
  import('dotenv').config();
}

import { isMobile } from 'react-device-detect';
import Instafeed from 'instafeed.js';

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
  let feed = new Instafeed({
    accessToken: process.env.IG_ACCESS_KEY,
    target: "instafeed",
    template: `
      <div style='flex: 20%'>
        <a href='{{link}}'>
          <img title='{{caption}}' src='{{image}}'/>
        </a>
        <div class='${clsx(styles.imgBorder)}'></div>
        <img src='img/logo.png' class='${clsx(styles.logo)}'/>
      </div>
    `,
    limit: 15
  })

  useEffect(() => {
    feed.run();
  })

  return (
    <Layout
      title={"Hello from Team Linebreak"}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
          <div className={clsx(styles.title)}><h1>Check Out Our Instagram <a href='https://www.instagram.com/firstteam8546/'>@firstteam8546</a></h1></div>
          <div className={clsx(styles.container)} id="instafeed"></div>
      </main>
    </Layout>
  );
}
