import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
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
  faUber,
  faAws,
  faPaypal,
  faAdobe,
  faPython,

} from '@fortawesome/free-brands-svg-icons'

import {
  faEnvelope,
  faMugHot,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  const router = useRouter()

  return (
    <div className={styles.container}>
      <Head>
        <title>noxc</title>
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
          <a href="mailto:hey@noxc.dev">hey@noxc.dev</a>
        </div>

        <div className={styles.space}></div>

        <div className={styles.project}>
          <img src="https://amusementclub.nyc3.cdn.digitaloceanspaces.com/web/buns_logo2.png"/>
          <div className={styles.left}>
            <h2>amusement club 2.0</h2>
            <p>new version of popular Discord gacha</p>
            <a href="https://github.com/NoxCaos/amusementclub2.0">view on GitHub</a>
            <a href="https://club.amusement.cafe/">visit project website</a>
          </div>
        </div>

        <div className={styles.project}>
          <img src="https://noxie.sgp1.cdn.digitaloceanspaces.com/web/pzv_load_smol.png"/>
          <div className={styles.left}>
            <h2>Panzer Vor</h2>
            <p>unleash your team of steel machinery in a tank RTS</p>
            <a href="https://noxcaos.itch.io/pzv">download prototype</a>
          </div>
        </div>

        <div className={styles.space}></div>

        <p>for full list of my games visit my <a href="https://noxcaos.itch.io/">itch.io page</a></p>
        <p>for full list of my projects visit my <a href="https://github.com/NoxCaos/">GitHub page</a></p>

        <div className={styles.space}></div>
        <h1 className={styles.heading}>expertise</h1>

        <div className={styles.table}>
          <div>
            <h2>software</h2>
            <ul>
              <li><FontAwesomeIcon icon={faBuffer} />Blender<p>| 1+ years</p></li>
              <li><FontAwesomeIcon icon={faBuffer} />3D Studio Max<p>| 3+ years</p></li>
              <li><FontAwesomeIcon icon={faBuffer} />ZBrush<p>| 1+ years</p></li>
              <li><FontAwesomeIcon icon={faBuffer} />Substance Painter<p>| 2+ years</p></li>
              <li><FontAwesomeIcon icon={faAdobe} />Adobe Photoshop<p>| 4+ years</p></li>
              <li><FontAwesomeIcon icon={faAdobe} />Adobe Premiere Pro<p>| 6+ years</p></li>
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
              <li><FontAwesomeIcon icon={faBuffer} />.NET<p>| 4+ years</p></li>
              <li><FontAwesomeIcon icon={faReact} />React<p>| 1+ years</p></li>
              <li><FontAwesomeIcon icon={faBuffer} />ENet<p>| 2+ years</p></li>
              <li><FontAwesomeIcon icon={faBuffer} />ReactiveX<p>| 1+ years</p></li>
            </ul>
          </div>
          <div className={styles.space}></div>
          <div>
            <h2>languages</h2>
            <ul>
              <li><FontAwesomeIcon icon={faBuffer} />C#<p>| 7+ years</p></li>
              <li><FontAwesomeIcon icon={faJs} />JavaScript<p>| 7+ years</p></li>
              <li><FontAwesomeIcon icon={faJava} />Java<p>| 2+ years</p></li>
              <li><FontAwesomeIcon icon={faPython} />Python<p>| 1+ years</p></li>
            </ul>
            <p className={styles.cur}>currently studying</p>
            <ul>
              <li><FontAwesomeIcon icon={faBuffer} />C/C++</li>
              <li><FontAwesomeIcon icon={faBuffer} />Shaderlab</li>
            </ul>
          </div>
        </div>

        <p>for more information and job history please download my <a href="https://cdn.noxc.dev/github/Gleb_Demianenko_resume.pdf">resume</a></p>
        <p>(currently not looking for opportunities)</p>

        <div className={styles.space}></div>
        <h1 className={styles.heading}>links</h1>

        <div className={styles.table}>
          <div>
            <h3>contact</h3>
            <ul>
              <li><FontAwesomeIcon icon={faKeybase} /><a href="https://keybase.io/noxc">noxc</a></li>
              <li><FontAwesomeIcon icon={faTwitter} /><a href="https://twitter.com/NoxCaos">@noxcaos</a></li>
              <li><FontAwesomeIcon icon={faDiscord} />NoxCaos#4905</li>
              <li><FontAwesomeIcon icon={faEnvelope} /><a href="mailto:hey@noxc.dev">hey@noxc.dev</a></li>
            </ul>
          </div>
          <div>
            <h3>portfolio</h3>
            <ul>
              <li><FontAwesomeIcon icon={faGithub} /><a href="https://github.com/NoxCaos/">GitHub</a></li>
              <li><FontAwesomeIcon icon={faArtstation} /><a href="https://www.artstation.com/noxcaos">ArtStation</a></li>
              <li><FontAwesomeIcon icon={faItchIo} /><a href="https://noxcaos.itch.io/">Itch.io</a></li>
            </ul>
          </div>
          <div>
            <h3>support</h3>
            <ul>
              <li><FontAwesomeIcon icon={faMugHot} /><a href="https://ko-fi.com/noxcaos">Ko-Fi</a></li>
              <li><FontAwesomeIcon icon={faPatreon} /><a href="https://www.patreon.com/noxcaos">Patreon</a></li>
              <li className={styles.click}><img src="https://noxie.sgp1.cdn.digitaloceanspaces.com/web/stellar.svg" />Stellar<p>(click to copy)</p></li>
              <li className={styles.click}><FontAwesomeIcon icon={faBitcoin} />Bitcoin<p>(click to copy)</p></li>
            </ul>
          </div>
        </div>

        <div className={styles.space}></div>
        <h1 className={styles.heading}>services and apps I use</h1>
        <div className={styles.grid}>
          <div onClick={() => router.push('https://cloud.digitalocean.com')}>
            <FontAwesomeIcon icon={faDigitalOcean} className={styles.icon} />
            <p>DigitalOcean</p>
          </div>
          <div onClick={() => router.push('https://vercel.com/')}>
            <img src="https://noxie.sgp1.cdn.digitaloceanspaces.com/web/zeit.png" className={styles.icon} />
            <p>Vercel</p>
          </div>
          <div onClick={() => router.push('https://www.backblaze.com/')}>
            <img src="https://noxie.sgp1.cdn.digitaloceanspaces.com/web/backblaze.png" className={styles.icon} />
            <p>Backblaze</p>
          </div>
          <div onClick={() => router.push('https://trello.com/')}>
            <FontAwesomeIcon icon={faTrello} className={styles.icon} />
            <p>Trello</p>
          </div>
          <div onClick={() => router.push('https://uber.com/')}>
            <FontAwesomeIcon icon={faUber} className={styles.icon} />
            <p>Uber</p>
          </div>
          <div onClick={() => router.push('https://aws.amazon.com/s3/')}>
            <FontAwesomeIcon icon={faAws} className={styles.icon} />
            <p>Amazon S3</p>
          </div>
          <div onClick={() => router.push('https://www.paypal.com/')}>
            <FontAwesomeIcon icon={faPaypal} className={styles.icon} />
            <p>PayPal</p>
          </div>
          <div onClick={() => router.push('https://duckduckgo.com/')}>
            <FontAwesomeIcon icon={faTrello} className={styles.icon} />
            <p>DuckDuckGo</p>
          </div>
          <div onClick={() => router.push('https://www.lastpass.com/')}>
            <img src="https://noxie.sgp1.cdn.digitaloceanspaces.com/web/lastpass-tile.svg" className={styles.icon} />
            <p>LastPass</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
