import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { CopyToClipboard } from 'react-copy-to-clipboard';
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
  faAws,
  faPaypal,
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
        <div style={{'padding': '0 5rem'}}>
          <p className={styles.sub}>gamedev generalist and web developer</p>
          <p className={styles.subfaded}>(aka NoxCaos, noxie, nox)</p>
          <a href="mailto:hey@noxc.dev" className={styles.mainlink}>hey@noxc.dev</a>
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
              <li><img src="https://noxie.sgp1.cdn.digitaloceanspaces.com/web/blender-1.svg" />Blender<p>| 1+ years</p></li>
              <li><img src="https://noxie.sgp1.cdn.digitaloceanspaces.com/web/3ds-max.svg" />3D Studio Max<p>| 3+ years</p></li>
              <li><FontAwesomeIcon icon={faBuffer} />ZBrush<p>| 1+ years</p></li>
              <li><FontAwesomeIcon icon={faBuffer} />Substance Painter<p>| 2+ years</p></li>
              <li><img src="https://noxie.sgp1.cdn.digitaloceanspaces.com/web/adobe-photoshop.svg" />Adobe Photoshop<p>| 4+ years</p></li>
              <li><img src="https://noxie.sgp1.cdn.digitaloceanspaces.com/web/adobe-premiere-pro.svg" />Adobe Premiere Pro<p>| 6+ years</p></li>
            </ul>
            <p className={styles.cur}>currently studying</p>
            <ul>
              <li><img src="https://noxie.sgp1.cdn.digitaloceanspaces.com/web/houdini.svg" />Houdini</li>
              <li><FontAwesomeIcon icon={faBuffer} />Substance Designer</li>
            </ul>
          </div>
          <div className={styles.space}></div>
          <div>
            <h2 style={{'background-color':'#50cd88'}}>frameworks</h2>
            <ul>
              <li><FontAwesomeIcon icon={faUnity} />Unity Engine<p>| 5+ years</p></li>
              <li><FontAwesomeIcon icon={faNodeJs} />NodeJS<p>| 4+ years</p></li>
              <li><img src="https://noxie.sgp1.cdn.digitaloceanspaces.com/web/c-sharp.svg" />.NET<p>| 4+ years</p></li>
              <li><FontAwesomeIcon icon={faReact} />React<p>| 1+ years</p></li>
              <li><FontAwesomeIcon icon={faBuffer} />ENet<p>| 2+ years</p></li>
              <li><FontAwesomeIcon icon={faBuffer} />ReactiveX<p>| 1+ years</p></li>
            </ul>
          </div>
          <div className={styles.space}></div>
          <div>
            <h2>languages</h2>
            <ul>
              <li><img src="https://noxie.sgp1.cdn.digitaloceanspaces.com/web/c-sharp.svg" />C#<p>| 7+ years</p></li>
              <li><FontAwesomeIcon icon={faJs} />JavaScript<p>| 7+ years</p></li>
              <li><FontAwesomeIcon icon={faJava} />Java<p>| 2+ years</p></li>
              <li><FontAwesomeIcon icon={faPython} />Python<p>| 1+ years</p></li>
            </ul>
            <p className={styles.cur}>currently studying</p>
            <ul>
              <li><img src="https://noxie.sgp1.cdn.digitaloceanspaces.com/web/cpp.svg" />C/C++</li>
              <li><FontAwesomeIcon icon={faBuffer} />Shaderlab</li>
            </ul>
          </div>
        </div>

        {
        //<p>for more information and job history please download my <a href="https://cdn.noxc.dev/github/Gleb_Demianenko_resume.pdf">resume</a></p>
        }

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
              <CopyToClipboard text="GDPJDZEIBIDI5RRJR74ROIWUKG3VV23C2MKDAZ5FHRWRHNK32PN6YBPJ">
                <li className={styles.click}>
                  <img src="https://noxie.sgp1.cdn.digitaloceanspaces.com/web/stellar.svg" />Stellar<p>(click here to copy)</p>
                </li>
              </CopyToClipboard>
              <CopyToClipboard text="bc1q6mnvxy2vhwm2l5dyddxyezvfnqmgggwwf5ux9vg204sjzcdr0a8q8l8x0r">
                <li className={styles.click}><FontAwesomeIcon icon={faBitcoin} />Bitcoin<p>(click here to copy)</p></li>
              </CopyToClipboard>
            </ul>
          </div>
        </div>

        <div className={styles.space}></div>
        <h1 className={styles.heading}>technologies I use</h1>
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
          <div onClick={() => router.push('https://ifttt.com/')}>
            <img src="https://noxie.sgp1.cdn.digitaloceanspaces.com/web/ifttt-vector-logo.svg" className={styles.icon} style={{filter: 'invert(1)'}} />
            <p>IFTTT</p>
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
            <img src="https://noxie.sgp1.cdn.digitaloceanspaces.com/web/duckduckgo.svg" className={styles.icon} style={{filter: 'invert(1)'}} />
            <p>DuckDuckGo</p>
          </div>
          <div onClick={() => router.push('https://www.lastpass.com/')}>
            <img src="https://noxie.sgp1.cdn.digitaloceanspaces.com/web/lastpass.svg" className={styles.icon} />
            <p>LastPass</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>nothing to see here</p>
      </footer>
    </div>
  )
}
