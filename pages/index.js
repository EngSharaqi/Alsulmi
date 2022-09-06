import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import main from '../styles/Home.module.css'
import { useRouter } from "next/router";

import en from '../locales/en';
import ar from '../locales/ar';

import banner_img from '../public/images/banner_logo.png'

export default function Home() {
  var router = useRouter();
  let t = router.locale === 'en' ? en : ar;
  return (
    <>
      <Head>
        <title>{t.title.home}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* cover */}
      <main className={`${main.banner}`}>
        <div className='row'>
          <div className={main.img}>
            <div className={main.cover}>
              <div className='container' style={{'height': 'inherit'}}>
                <div className={`row`} style={{'height': '66%'}}>
                  <section>
                    <div className={`row ${main.custReverse}`}>
                    <div className={`col-xs-12 col-sm-12 col-md-8 col-lg-8`}>
                        <h1>Our main principle prevailing is</h1>
                        <p>Reaching clients to the goal that they aspire to have a trained and specialized staff that understands the needs of each individual client</p>
                        <Link href="/">
                          <a>
                            <button className={`btn btn-primary`}>Contact us</button>
                            <button className={`btn btn-primary`}>Services</button>
                          </a>
                        </Link>
                      </div>
                      <div className={`col-xs-12 col-sm-12 col-md-4 col-lg-4`}>
                        <img src={banner_img.src} style={{"max-width": "100%", "margin-bottom": "20px"}} />
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>   
  )
}
