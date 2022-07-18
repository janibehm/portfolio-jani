// import Image from 'next/image';
import styles from "../../styles/Contact.module.css";

function IndexTest() {
  return (
    <div>
      <div className={styles.text}>
        <h4>Sähköposti: jani.behm@gmail.com</h4>
        <h4>Puhelin: +358 468 990 315</h4>
      </div>

      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfbWItMnUtgCmmz3nRcwuZ_VnLZ-vj0KCcluAUx2V9PqcXaOw/viewform?embedded=true"
        width="640"
        height="935"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
      >
        Ladataan…
      </iframe>
    </div>
  );
}

export default IndexTest;
