import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faBuffer,
  faUnity,
  faNodeJs,
  faReact,
  faJava,
  faJs,
  faKeybase,
  faTwitter,
  faDiscord,
  faGithub,
  faArtstation,
  faBitcoin,
  faPatreon,
  faItchIo,
  faDigitalOcean,
  faTrello,

} from '@fortawesome/free-brands-svg-icons'

import {
  faEnvelope,
  faMugHot,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img className={styles.logoAlt} src="https://noxie.sgp1.cdn.digitaloceanspaces.com/web/orange_mint_new_trnsp.png"/>
        <div className={styles.mainstripe}>
          <img className={styles.logo} src="https://noxie.sgp1.cdn.digitaloceanspaces.com/web/orange_mint_shadow.png"/>
          <h1 className={styles.heading}>noxc:</h1>
        </div>
        <div className={styles.left} style={{'padding': '0 5rem'}}>
          <p className={styles.sub}>gamedev generalist and web developer</p>
          <a href="">hey@noxc.dev</a>
        </div>

        <div className={styles.space}></div>

        <div className={styles.project}>
          <img src="https://amusementclub.nyc3.cdn.digitaloceanspaces.com/web/buns_logo2.png"/>
          <div className={styles.left}>
            <h2>Amusement Club Alexandrite</h2>
            <p>new version of popular Discord gacha</p>
            <a href="">view on GitHub</a>
            <a href="">visit project website</a>
          </div>
        </div>

        <div className={styles.project}>
          <img src="https://noxie.sgp1.cdn.digitaloceanspaces.com/web/pzv_load_smol.png"/>
          <div className={styles.left}>
            <h2>Panzer Vor</h2>
            <p>unleash your team of steel machinery in a tank RTS</p>
            <a href="">download prototype</a>
          </div>
        </div>

        <div className={styles.space}></div>

        <p>for full list of my games visit my <a href="">itch.io page</a></p>
        <p>for full list of my projects visit my <a href="">GitHub page</a></p>

        <div className={styles.space}></div>
        <h1 className={styles.heading}>expertise</h1>

        <div className={styles.table}>
          <div>
            <h2>software</h2>
            <ul>
              <li><FontAwesomeIcon icon={faBuffer} />Blender<p>| 1+ years</p></li>
              <li><FontAwesomeIcon icon={faBuffer} />3D Studio Max<p>| 3+ years</p></li>
            </ul>
            <p className={styles.cur}>currently studying</p>
            <ul>
              <li><FontAwesomeIcon icon={faBuffer} />Houdini</li>
              <li><FontAwesomeIcon icon={faBuffer} />Substance Designer</li>
            </ul>
          </div>
          <div className={styles.space}></div>
          <div>
            <h2 style={{'background-color':'#50cd88'}}>frameworks</h2>
            <ul>
              <li><FontAwesomeIcon icon={faUnity} />Unity Engine<p>| 5+ years</p></li>
              <li><FontAwesomeIcon icon={faNodeJs} />NodeJS<p>| 4+ years</p></li>
              <li><FontAwesomeIcon icon={faReact} />.NET<p>| 4+ years</p></li>
              <li><FontAwesomeIcon icon={faReact} />React<p>| 1+ years</p></li>
            </ul>
          </div>
          <div className={styles.space}></div>
          <div>
            <h2>languages</h2>
            <ul>
              <li><FontAwesomeIcon icon={faBuffer} />C#<p>| 7+ years</p></li>
              <li><FontAwesomeIcon icon={faJs} />JavaScript<p>| 7+ years</p></li>
              <li><FontAwesomeIcon icon={faJava} />Java<p>| 2+ years</p></li>
            </ul>
          </div>
        </div>

        <p>for more information and job history please download my <a href="">resume</a> or <a href="">full CV</a></p>

        <div className={styles.space}></div>
        <h1 className={styles.heading}>links</h1>

        <div className={styles.table}>
          <div>
            <h3>contact</h3>
            <ul>
              <li><FontAwesomeIcon icon={faKeybase} /><a href="">noxc</a></li>
              <li><FontAwesomeIcon icon={faTwitter} /><a href="">@noxcaos</a></li>
              <li><FontAwesomeIcon icon={faDiscord} />NoxCaos#4905</li>
              <li><FontAwesomeIcon icon={faEnvelope} /><a href="mailto:hey@noxc.dev">hey@noxc.dev</a></li>
            </ul>
          </div>
          <div>
            <h3>portfolio</h3>
            <ul>
              <li><FontAwesomeIcon icon={faGithub} /><a href="">GitHub</a></li>
              <li><FontAwesomeIcon icon={faArtstation} /><a href="">ArtStation</a></li>
              <li><FontAwesomeIcon icon={faItchIo} /><a href="">Itch.io</a></li>
            </ul>
          </div>
          <div>
            <h3>support</h3>
            <ul>
              <li><FontAwesomeIcon icon={faMugHot} /><a href="">Ko-Fi</a></li>
              <li><FontAwesomeIcon icon={faPatreon} /><a href="">Patreon</a></li>
              <li><FontAwesomeIcon icon={faArrowRight} /><a href="">Stellar</a><p>(click to reveal)</p></li>
              <li><FontAwesomeIcon icon={faBitcoin} /><a href="">Bitcoin</a><p>(click to reveal)</p></li>
            </ul>
          </div>
        </div>

        <div className={styles.space}></div>
        <h1 className={styles.heading}>services and apps I use</h1>
        <div className={styles.grid}>
          <div>
            <FontAwesomeIcon icon={faDigitalOcean} className={styles.icon} />
            <p>DigitalOcean</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faDigitalOcean} className={styles.icon} />
            <p>Vercel</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faDigitalOcean} className={styles.icon} />
            <p>MongoDB Atlas</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faTrello} className={styles.icon} />
            <p>Trello</p>
          </div>
        </div>

        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" />
        </a>
      </footer>
    </div>
  )
}
