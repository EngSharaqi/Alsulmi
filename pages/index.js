import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import main from '../styles/Home.module.css'
import { useRouter } from "next/router";
import Services from '../components/services'

import logo from '../public/images/logo.PNG'

import en from '../locales/en';
import ar from '../locales/ar';

import banner_img from '../public/images/banner_logo.png'
import overview from '../public/images/overview.svg'

// parteners images
import dell from '../public/images/parteners/dell.png'
import aldawaa from '../public/images/parteners/Aldawaa-logo.png'
import aldawaa_pharmacy from '../public/images/parteners/Aldawaa-pharmacy.png'
import asalet from '../public/images/parteners/Asalet-Elarab.png'
import atlas from '../public/images/parteners/Atlas-elevators.png'
import browneagle from '../public/images/parteners/browneagle.png'
import fullscreen from '../public/images/parteners/full-screen.png'
import moj from '../public/images/parteners/moj-logo.png'
import secureEyes from '../public/images/parteners/Secureeyes.png'
import servicesSolutions from '../public/images/parteners/Services-Solutions.png'
import sharek from '../public/images/parteners/Sharek.png'
import spsc from '../public/images/parteners/SPSC.png'

// Teamwork
import ibrahim_alsulmi from '../public/images/team/ibrahim_alsulmi.jpg'
import khaled from '../public/images/team/khaled.jpeg'
import otba_bakr from '../public/images/team/otba-bakr.jpg'
import yosef_alsulmi from '../public/images/team/yosef_alsulmi.jpg'

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
              <div className='container' style={{ 'height': 'inherit' }}>
                <div className={`row`} style={{ 'height': '66%' }}>
                  <section>
                    <div className={`row ${main.custReverse}`}>
                      <div className={`col-xs-12 col-sm-12 col-md-8 col-lg-8`}>
                        <h1>Our main principle prevailing is</h1>
                        <p>Reaching clients to the goal that they aspire to have a trained and specialized staff that understands the needs of each individual client</p>
                        <Link href="/">
                          <a>
                            <button className={`btn btn-primary`}>Contact us</button>
                            <button className={`btn btn-primary ${main.btn_srvs}`}>Services</button>
                          </a>
                        </Link>
                      </div>
                      <div className={`col-xs-12 col-sm-12 col-md-4 col-lg-4`}>
                        <img src={banner_img.src} style={{ "max-width": "100%", "margin-bottom": "20px" }} />
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Overview section */}
      <div className={`row ${main.overview}`}>
        <div className='container'>
          <div className={`row ${main.column}`}>
            <div className={`col-xs-12 col-sm-12 col-md-8 col-lg-8`}>
              <h4>An overview of Ibrahim Al-Sulami's office</h4>
              <p>Ibrahim Al Sulami Office is accountants and certified auditors one of the best auditing and accounting companies in the Kingdom of Saudi Arabia, where we provide financial, accounting and tax consulting services, auditing and auditing, internal audit of companies and bookkeeping accounting. We aim to enhance customer added value by providing distinguished financial, administrative and technical services in the aforementioned fields of work. Accounting is the basis for any successful business</p>
              <button className={`btn btn-primary ${main.btn_srvs}`}>
                <a href='/'>Read more</a>
              </button>
            </div>
            <div className={`col-xs-12 col-sm-12 col-md-4 col-lg-4`}>
              <img src={overview.src} style={{ "max-width": "100%", "margin-bottom": "20px" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Our Value  */}
      <div className={`row ${main.our_value}`}>
        <div className='container'>
          <div className='row'>
            <div className='row'>
              <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                <h4>Our Value</h4>
                <p>We work for you towards continuous progress and development. We firmly believe in the pursuit of excellence. We join a wonderful team of distinguished accountants and auditors, specialists and qualified to provide excellent financial, administrative and tax services. We are experienced in eliminating the storms that threaten them and identifying weaknesses that must be focused on and not overlooked. Our motto is confidence, excellence, challenge.</p>
              </div>
            </div>
            <div className='row'>
              <div className='col-xs-12 col-sm-6 col-md-4 col-lg-4'>
                <h6>Empowerment</h6>
                <p>We give the authority to our employees so that they can provide all customer services without going back to higher levels.</p>
              </div>
              <div className='col-xs-12 col-sm-6 col-md-4 col-lg-4'>
                <h6>Respect the time</h6>
                <p>We provide clients with a schedule that we stick to, and that prompts us to be more effective and focused on achieving the goal.</p>
              </div>
              <div className='col-xs-12 col-sm-6 col-md-4 col-lg-4'>
                <h6>Honesty</h6>
                <p>We adhere to the privacy policy of every client and take a sophisticated ethical course on the individual and team level.</p>
              </div>

              <div className='col-xs-12 col-sm-6 col-md-4 col-lg-4'>
                <h6>Employee loyalty</h6>
                <p className={`${main.p}`}>Encouraging and rewarding creative and distinguished people and putting the right person in the right place.</p>
              </div>
              <div className='col-xs-12 col-sm-6 col-md-4 col-lg-4'>
                <h6>Team work</h6>
                <p className={`${main.p}`}>Our motto The word "we" is more important than the word "I" and we attribute our success to the entire team and not to a specific employee.</p>
              </div>
              <div className='col-xs-12 col-sm-6 col-md-4 col-lg-4'>
                <h6>Perseverance</h6>
                <p className={`${main.p}`}>Success does not come by chance, but rather is the result of achieving all the goals and aspirations of customers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Services */}
      <Services />

      {/* Free services */}
      <div className={`row ${main.banner} ${main.free_service}`}>
        <div className={main.img}>
          <div className={main.cover}>
            <div className='container'>
              <div className={`row`}>
                <h4>Free Services</h4>
                <p>The best offers suitable for your circumstances. Share the offers with relatives and specialists Ibrahim Al-Sulami’s office started providing its activities in various legal accounting and auditing services in effective ways that keep pace with all governmental requirements of companies and institutions, which all establishments in the Kingdom of Saudi Arabia aspire to. At Ibrahim Al Sulami Office, we strive to achieve the accounting and auditing goals with the best standards of performance, quality, reliability, and responsibility, which made us, by the grace of God, keep on continuing to deal with many important partnerships we have.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className={`row ${main.testemonials}`}>
        <div class='container'>
          <div className='row'>
            <h4>Testemonials</h4>
            <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4' style={{ 'margin-bottom': '15px' }}>
              <div className={`card ${main.card}`}>
                <h5>Mohamed Hegazy</h5>
                <p>CEO, Owl Eyes</p>
                <small>By far the best team I've ever worked with. They really understood what I was aiming for and they totally did! Simply this is one of the best accounting firms and offices ever</small>
              </div>
            </div>
            <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4' style={{ 'margin-bottom': '15px' }}>
              <div className={`card ${main.card}`}>
                <h5>Abo Rakan</h5>
                <p>Product Manager, Trophyhouse</p>
                <small>It was really fun getting to know the team during the project. They all helped me answer my questions and made me feel very comfortable. The work finished with twice the quality I had imagined!</small>
              </div>
            </div>
            <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4' style={{ 'margin-bottom': '15px' }}>
              <div className={`card ${main.card}`}>
                <h5>Ayman Ismael</h5>
                <p>Co founder, Coffee Inc</p>
                <small>I wonder why I haven't contacted this office before! Seriously, they all have a commendable talent in their respective fields Thanks for this amazing experience!</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team members */}
      <div className={`row ${main.members}`}>
        <div className='container'>
          <h4>Teamwork</h4>
          <div className={`row`}>
            {/* row 1 === 1 */}
            <div className={`row ${main.FCard}`} style={{ 'text-align': 'center' }}>
              <div className={`card ${main.card}`}>
                <div className={`${main.team_imgs}`} style={{ 'background-image': `url(${ibrahim_alsulmi.src})` }}></div>
                <div className={`row ${main.employee}`}>
                  <h5>Ibrahim Alsulmi</h5>
                  <p>Founder &amp; Owner</p>
                </div>
              </div>
            </div>

            {/* row 2 === 1 */}
            <div className={`row ${main.FCard}`} style={{ 'text-align': 'center' }}>
              <div className={`card ${main.card}`}>
                <div className={`${main.team_imgs}`} style={{ 'background-image': `url(${khaled.src})` }}></div>
                <div className={`row ${main.employee}`}>
                  <h5>Khaled Salah</h5>
                  <p>Senior auditor &amp; financial and tax advisor</p>
                </div>
              </div>
            </div>

            {/* row 3 === 2 */}
            <div className={`row ${main.FCard}`} style={{ 'text-align': 'right'}}>
              <div className={`card ${main.card}`}>
                <div className={`${main.team_imgs}`} style={{ 'background-image': `url(${otba_bakr.src})` }}></div>
                <div className={`row ${main.employee}`}>
                  <h5>Otba Bakr</h5>
                  <p>financial and TAX Consultant</p>
                </div>
              </div>

              <div style={{ 'text-align': 'left'}}>
                <div className={`card ${main.card}`}>
                  <div className={`${main.team_imgs}`} style={{ 'background-image': `url(${logo.src})` }}></div>
                  <div className={`row ${main.employee}`}>
                    <h5>Maha Alqasem</h5>
                    <p>Senior auditor</p>
                  </div>
                </div>
              </div>
            </div>
            {/* row 4 === 3 */}
            <div className={`row ${main.FCard}`} style={{ 'text-align': 'right'}}>
              <div className={`card ${main.card}`}>
                <div className={`${main.team_imgs}`} style={{ 'background-image': `url(${logo.src})` }}></div>
                <div className={`row ${main.employee}`}>
                  <h5>Ahmed Yahia</h5>
                  <p>Aduitor &amp; administration</p>
                </div>
              </div>

              <div style={{ 'text-align': 'center'}} >
                <div className={`card ${main.card}`}>
                  <div className={`${main.team_imgs}`} style={{ 'background-image': `url(${logo.src})` }}></div>
                  <div className={`row ${main.employee}`}>
                    <h5>Adbulmaged Sharaqi</h5>
                    <p>Auditor</p>
                  </div>
                </div>
              </div>
              <div style={{ 'text-align': 'left'}}>
                <div className={`card ${main.card}`}>
                  <div className={`${main.team_imgs}`} style={{ 'background-image': `url(${logo.src})` }}></div>
                  <div className={`row ${main.employee}`}>
                    <h5>Mona Sultan</h5>
                    <p>Audoitor</p>
                  </div>
                </div>
              </div>
            </div>

            {/* row 5 === 3 */}
            <div className={`row ${main.FCard}`} style={{ 'text-align': 'right'}}>
              <div className={`card ${main.card}`}>
                <div className={`${main.team_imgs}`} style={{ 'background-image': `url(${yosef_alsulmi.src})` }}></div>
                <div className={`row ${main.employee}`}>
                  <h5>Yosef Alsulmi</h5>
                  <p>Auditor</p>
                </div>
              </div>

              <div style={{ 'text-align': 'center'}}>
                <div className={`card ${main.card}`}>
                  <div className={`${main.team_imgs}`} style={{ 'background-image': `url(${logo.src})` }}></div>
                  <div className={`row ${main.employee}`}>
                    <h5>Tasneem Mohamed</h5>
                    <p>Auditor</p>
                  </div>
                </div>
              </div>
              <div style={{ 'text-align': 'left'}}>
                <div className={`card ${main.card}`}>
                  <div className={`${main.team_imgs}`} style={{ 'background-image': `url(${logo.src})` }}></div>
                  <div className={`row ${main.employee}`}>
                    <h5>Moaaz Alsulmi</h5>
                    <p>Auditor</p>
                  </div>
                </div>
              </div>
            </div>
            {/* row 6 === 2 */}
            <div className={`row ${main.FCard}`} style={{ 'text-align': 'right'}}>
              <div className={`card ${main.card}`}>
                <div className={`${main.team_imgs}`} style={{ 'background-image': `url(${logo.src})` }}></div>
                <div className={`row ${main.employee}`}>
                  <h5>Shaden Alsulmi</h5>
                  <p>IT specialist</p>
                </div>
              </div>

              <div style={{ 'text-align': 'left'}}>
                <div className={`card ${main.card}`}>
                  <div className={`${main.team_imgs}`} style={{ 'background-image': `url(${logo.src})` }}></div>
                  <div className={`row ${main.employee}`}>
                    <h5>Mohamed Ghareeb</h5>
                    <p>Auditor</p>
                  </div>
                </div>
              </div>
            </div>
            {/* row 7 === 1 */}
            <div className={`row ${main.FCard}`} style={{ 'text-align': 'center'}}>
              <div className={`card ${main.card}`}>
                <div className={`${main.team_imgs}`} style={{ 'background-image': `url(${logo.src})` }}></div>
                <div className={`row ${main.employee}`}>
                  <h5>Mohamed Alramady</h5>
                  <p>Auditor</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Parteners */}
      <div class="row">
        <div className={main.whattheysay}>
          <div class="row" id="portfolio">
            <h4>Parteners</h4>
          </div>

          <div class="row">
            <div className={main.slider}>
              <div class={main.slide_track}>
                <div className={main.slide}>
                  <div className={main.card + ' ' + main.review}>
                    <div>
                      <div className={main.proj1 + ' ' + main.revImg + ' ' + main.r1}></div>
                      {/* <Image className="card-img-top" src={aboutImg} alt="Card image cap" /> */}
                    </div>
                    <div className="card-body">
                      <img src={dell.src} />
                    </div>
                  </div>
                </div>

                <div className={main.slide}>
                  <div className={main.card + ' ' + main.review}>
                    <div>
                      <div className={main.proj1 + ' ' + main.revImg + ' ' + main.r1}></div>
                      {/* <Image className="card-img-top" src={aboutImg} alt="Card image cap" /> */}
                    </div>
                    <div className="card-body">
                      <img src={aldawaa.src} />
                    </div>
                  </div>
                </div>
                <div className={main.slide}>
                  <div className={main.card + ' ' + main.review}>
                    <div>
                      <div className={main.proj1 + ' ' + main.revImg + ' ' + main.r1}></div>
                      {/* <Image className="card-img-top" src={aboutImg} alt="Card image cap" /> */}
                    </div>
                    <div className="card-body">
                      <img src={aldawaa_pharmacy.src} />
                    </div>
                  </div>
                </div>
                <div className={main.slide}>
                  <div className={main.card + ' ' + main.review}>
                    <div>
                      <div className={main.proj1 + ' ' + main.revImg + ' ' + main.r1}></div>
                      {/* <Image className="card-img-top" src={aboutImg} alt="Card image cap" /> */}
                    </div>
                    <div className="card-body">
                      <img src={asalet.src} />
                    </div>
                  </div>
                </div>
                <div className={main.slide}>
                  <div className={main.card + ' ' + main.review}>
                    <div>
                      <div className={main.proj1 + ' ' + main.revImg + ' ' + main.r1}></div>
                      {/* <Image className="card-img-top" src={aboutImg} alt="Card image cap" /> */}
                    </div>
                    <div className="card-body">
                      <img src={atlas.src} />
                    </div>
                  </div>
                </div>
                <div className={main.slide}>
                  <div className={main.card + ' ' + main.review}>
                    <div>
                      <div className={main.proj1 + ' ' + main.revImg + ' ' + main.r1}></div>
                      {/* <Image className="card-img-top" src={aboutImg} alt="Card image cap" /> */}
                    </div>
                    <div className="card-body">
                      <img src={browneagle.src} />
                    </div>
                  </div>
                </div>
                <div className={main.slide}>
                  <div className={main.card + ' ' + main.review}>
                    <div>
                      <div className={main.proj1 + ' ' + main.revImg + ' ' + main.r1}></div>
                      {/* <Image className="card-img-top" src={aboutImg} alt="Card image cap" /> */}
                    </div>
                    <div className="card-body">
                      <img src={fullscreen.src} />
                    </div>
                  </div>
                </div>
                <div className={main.slide}>
                  <div className={main.card + ' ' + main.review}>
                    <div>
                      <div className={main.proj1 + ' ' + main.revImg + ' ' + main.r1}></div>
                      {/* <Image className="card-img-top" src={aboutImg} alt="Card image cap" /> */}
                    </div>
                    <div className="card-body">
                      <img src={moj.src} />
                    </div>
                  </div>
                </div>
                <div className={main.slide}>
                  <div className={main.card + ' ' + main.review}>
                    <div>
                      <div className={main.proj1 + ' ' + main.revImg + ' ' + main.r1}></div>
                      {/* <Image className="card-img-top" src={aboutImg} alt="Card image cap" /> */}
                    </div>
                    <div className="card-body">
                      <img src={secureEyes.src} />
                    </div>
                  </div>
                </div>
                <div className={main.slide}>
                  <div className={main.card + ' ' + main.review}>
                    <div>
                      <div className={main.proj1 + ' ' + main.revImg + ' ' + main.r1}></div>
                      {/* <Image className="card-img-top" src={aboutImg} alt="Card image cap" /> */}
                    </div>
                    <div className="card-body">
                      <img src={servicesSolutions.src} />
                    </div>
                  </div>
                </div>
                <div className={main.slide}>
                  <div className={main.card + ' ' + main.review}>
                    <div>
                      <div className={main.proj1 + ' ' + main.revImg + ' ' + main.r1}></div>
                      {/* <Image className="card-img-top" src={aboutImg} alt="Card image cap" /> */}
                    </div>
                    <div className="card-body">
                      <img src={sharek.src} />
                    </div>
                  </div>
                </div>
                <div className={main.slide}>
                  <div className={main.card + ' ' + main.review}>
                    <div>
                      <div className={main.proj1 + ' ' + main.revImg + ' ' + main.r1}></div>
                      {/* <Image className="card-img-top" src={aboutImg} alt="Card image cap" /> */}
                    </div>
                    <div className="card-body">
                      <img src={spsc.src} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}
