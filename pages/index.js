import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
   <> <h1 className={styles.title}>Etusivu</h1>
   <div>
      <p className={styles.text}>Olen web-kehittäjä Helsingistä. Oli projekti mikä tahansa voin luvata,että olen täysillä mukana ja asiakkaiden tyytyväisyys on minulle ykkös asia. 
      Nykyajan maailmassa on monia eri teknologioita web-kehityksessä ja mielestäni parasta kieltä tai tapaa ei ole olemassa vaan pitäisi aina miettiä mikä on juuri tekeillä olevaan projektiin paras vaihtoehto.</p>

      <Link href="/subfolder">
        <a className={styles.btn}>Ota yhteyttä</a>
      </Link>
    </div></> 
   
    
    );
}
