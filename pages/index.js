import React, { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner';
import Card from '../components/Card'
import styles from '../styles/Home.module.css'
import coffeeStoresData from '../data/coffeeStores.json'
import { fetchCoffeeStores } from '../lib/coffeeShopData';

export async function getStaticProps(context) {
  console.log('getStaticProps running...')

  const coffeeStores = await fetchCoffeeStores();
  return {
    props: {
      coffeeStores
    }
  }
}

export default function Home({ coffeeStores }) {
  console.log('passed with getStatic: ', coffeeStores)
  fetchCoffeeStores();
  
  const info = coffeeStores.map(coffeeShop => (
    <Card 
      key={coffeeShop.fsq_id} 
      info={coffeeShop} 
    />
  ))

  function handleBannerButtonClick() {
    console.log('Clicked');
  }

  return (
    <>
      <Head>
        <title>Coffee Hound</title>
        <meta name="description" content="Find the best local coffee shops and roasteries by location and rate the best ones near you!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <div className={styles.bannerWrapper}>
          <Banner 
            className={styles.homeBanner}
            buttonText="View Stores Nearby"
            handleClick={handleBannerButtonClick}
          />
          <Image 
            className={styles.heroImage}
            src="/static/open-doodles-coffee.png"
            height={200}
            width={300}
            alt="hero coffee image"
          />
        </div>
        {coffeeStores.length > 0 && 
        <>
          <h2 className={styles.storeListHeading}>Selected Sacramento Coffee Shops</h2>
          <div className={styles.cardContainer}>
            {info}
          </div>
        </>}
      </main>
    </>
  )
}

//Illustration by <a href="https://icons8.com/illustrations/author/206397">Pablo Marquez</a> from <a href="https://icons8.com/illustrations">Ouch!</a>
