import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
   <>
   <Head>
     <title>Etusivu</title>
     <meta name="web-kehitys" content="web-kehitys" />
   </Head>
    <h1 className={styles.title}>Etusivu</h1>

   <div className={styles.container}>
   <p className={styles.text}>Olen web-kehittäjä Helsingistä. Oli projekti mikä tahansa voin luvata, että olen täysillä mukana ja asiakkaiden tyytyväisyys on minulle ykkösasia. 
      Web-sovellus kehityksessä tykkään työskenellä teknologioilla, kuten React/Nextjs ja Word Press riippuen projektin luonteesta. 
      Myös backend kehitys ja Dev Ops ovat minulle tuttua. Pilviympäristössä ovat projekteissa minulla olleet käytössä mm. Google Cloud, Whm ja Linode.</p>
  </div>
      <Link href="/contact">
        <a className={styles.btn}>Ota yhteyttä</a>
      </Link>
 </> 
   
    
    );
}
