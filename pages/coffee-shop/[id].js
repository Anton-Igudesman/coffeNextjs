import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../../styles/CoffeeShop.module.css';
import Image from 'next/image';
import cls from 'classnames';
import {fetchCoffeeStores} from '../../lib/coffeeShopData';

import coffeeStoreData from '../../data/coffeeStores.json'

export async function getStaticProps(props) {
    
    const coffeeStores = await fetchCoffeeStores();
    return {
        props: {
            coffeeStore: coffeeStores.find(coffeeStore => {
                return coffeeStore.fsq_id.toString() === props.params.id
            })
        }
    }
}

fetchCoffeeStores();

export async function getStaticPaths() {
    
    const coffeeStores = await fetchCoffeeStores();
    console.log(coffeeStores)
    const paths = coffeeStores.map((coffeeStore) => {
        return {
            params: {
                id: coffeeStore.fsq_id.toString()
            }
        }
    })
    return {
        paths,
        fallback: true
    } 
    
    
}

function handleClick() {
    console.log('Upvote success!')
}

export default function CoffeeShop({ coffeeStore }) {
    console.log('destructured coffeeStore props: ', coffeeStore)
    const { address, locality, region, postalcode } = coffeeStore.location
    const router = useRouter();
    console.log('router: ', router);
    if (router.isFallback) return <div>...Loading</div>
    return (
        <>
            <Head>
                <title>{coffeeStore.name}</title>
            </Head>
            <div className={styles.container}>
                <Link href="/" legacyBehavior>
                    <a>
                        <button className={styles.homeButton}>Back to home</button>
                    </a>
                </Link>
            <div className={cls(styles.cardContainer, "glass")}>
                
                <Image
                    className={styles.storeImage} 
                    src={coffeeStore.imgUrl || '/static/download.jpg'}
                    alt="coffee shop image"
                    height={200}
                    width={280}
                />
                <div className={styles.textContainer}>
                    <p>Name: {coffeeStore.name}</p>
                    <p>Phone: {coffeeStore.phone}</p>
                    <p>Address: {`${address}, ${locality}, ${region}, ${postalcode}`}</p>
                    <button
                        onClick={handleClick}
                    >
                        Upvote!
                    </button>
                </div>
            </div>
        </div>
        </>
        
    )
}

