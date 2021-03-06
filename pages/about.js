import Head from "next/head";
import styles from "../styles/About.module.css";
import Image from "next/image";

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
      <div flex-container>
        <h3>Wordpress</h3>
        <p className={styles.about}>
          Hyvä ratkaisu projektissa, jossa halutaan käyttää valmiita tai custom
          teemoja, sekä plugineja luomaan web-sivut tai web kauppa. WordPress on
          alun perin blogien luomiseen ja ylläpitoon tarkoitettu, avoimeen
          lähdekoodin WWW-sisällönhallintaohjelmisto.
        </p>
        <div>
          <Image
            src="/wordpress_logo.jpg"
            alt="wp_logo"
            width={470}
            height={270}
          />
        </div>
        <div>
          <h3>React ja Nextjs</h3>
          <p className={styles.about}>
            {" "}
            React on moderni Javasciprt kirjasto, jolla voidaa rakentaa single
            page aplikaatioitata ja todella yksityiskohtaisia sovelluksia.
            Nextjs mahdollistaa serveripuolen renderöinnin, sekä
            staattistensivujen tekemisen, josta on hyötyä mm. sivuston nopeutta
            ja hakukoneoptimointia ajatellen.
          </p>
          <div className="logo-container">
            <Image
              src="/react_logo.png"
              alt="reactjs_logo"
              width={240}
              height={240}
            />
            <div className="next-js-logo">
              <Image
                src="/next-js_logo.png"
                alt="nextjs_logo"
                width={240}
                height={240}
              />
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </>
  );
};

export default about;
