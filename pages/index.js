import Link from 'next/link'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Listing | Home</title>
      <meta name="keywords" content="listings" />
    </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome to my Next.js Home Page</h1>
        <p className={styles.text}> mmmineincjekcjekcjenhdnehwbdnwe jdbwejhdbwhjwehbdwehjbd mmmineincjekcj ekcjenhdnehwbdnwejdbwejhdbwhjwehbdwehjbd </p>
        <p className={styles.text}> mmmineincjekcjekcjenhdnehwbdnwej dbwejhdbwhjwehbdwehjbd mmmineincjekcje kcjenhdnehwbdnwejdbwejhdbwhjwehbdwehjbd </p>
        <Link href="/items/item-list">
          <a className={styles.btn}>See Listings</a>
        </Link>
      </div>
    </>
  )
}
