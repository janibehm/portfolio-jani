// import Image from 'next/image';
import styles from '../../styles/Contact.module.css';


function IndexTest () {
    return ( 
<div>
    <div>
    {/* <Image src="/wordpress_logo.jpg" width={250} height={250}/> */}
     </div>

<div className={styles.container}>
<h2>Yhteystiedot</h2>
<h3>Sähköposti: jani.behm@gmail.com</h3>
<h3>Puhelin: +358 468 990 315</h3>
</div>
</div>
     );
}

export default IndexTest;