import Head from 'next/head'
import styles from '../styles/About.module.css'
import Image from 'next/image'; 

const about = () => {
    return (
        <>
    <Head>
     <title>Teknologiat</title>
     <meta name="Teknologiat" content="Teknologiat" />
   </Head>
        <div>
        <h1>Teknologiat</h1>
        </div>
        <div>
        <p className={styles.about }>
        Wordpress-kehitys on nopea ratkaisu, jossa voidaan käyttää graaffisia alustoja ja plugineja luomaan 
        web-sivut tai web kauppa.</p> 
        <div>
        <Image src="/wordpress_logo.jpg" width={470} height={270}/>
        </div>
        <div>
        <p className={styles.about }>React ja Nextjs sopivat tilanteeseen, jos halutaan yksityiskohtaiset sivut, sekä
        enemmän hallintaa ja nopeutta.</p>
        <div className='logo-container'>
        
            <Image src="/react_logo.png" width={240} height={240}/>
         
            <div className='next-js-logo'>
            <Image src="/next-js_logo.png" width={240} height={240}/>
            </div>
            </div>
        </div>
        </div>
        
        </>
   
        
    );
}

export default about;