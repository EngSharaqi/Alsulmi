import { useRouter } from "next/router"
import main from '../styles/contactUs.module.css'
import Head from 'next/head'
import en from '../locales/en'
import ar from '../locales/ar'
export default function Contact_us() {
    var router = useRouter();
    let t = router.locale === 'en' ? en : ar;
    return (
        <>
            <Head>
                <title>{t.title.contactus}</title>
            </Head>
            <div className={`${main.contactus}`}>
                <div className='row'>
                    <div className='container'>
                        <h4>{t.contact_us.title}</h4>
                        <div className='row'>
                            <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                                <h5>{t.contact_us.address.title}</h5>
                                <p>
                                    <a href="https://www.google.com/maps/dir//%D8%B4%D8%B1%D9%83%D8%A9+%D8%A7%D8%A8%D8%B1%D8%A7%D9%87%D9%8A%D9%85+%D8%A7%D9%84%D8%B3%D9%84%D9%85%D9%8A+%D9%85%D8%AD%D8%A7%D8%B3%D8%A8%D9%88%D9%86+%D9%88%D9%85%D8%B1%D8%A7%D8%AC%D8%B9%D9%88%D9%86+%D9%82%D8%A7%D9%86%D9%88%D9%86%D9%8A%D9%88%D9%86+exit+10+Western+branch+road+between+exit+11+and+Riyadh+Saudi+Arabia%E2%80%AD%E2%80%AD/@24.7579454,46.7404576,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3e2f032378ca29e1:0x5aed5c347184e08b!2m2!1d46.7404576!2d24.7579454" target='_blank'>{t.contact_us.address.desc}</a>
                                </p>

                                <h5>{t.contact_us.phone.title}</h5>
                                <p>
                                    <a href='tel:+966114846664'>{t.contact_us.phone.a}</a>
                                    <a href='tel:+966560229188'>{t.contact_us.phone.b}</a>
                                </p>

                                <h5>{t.contact_us.email.title}</h5>
                                <p>
                                    <a href='mailto:khaled@Alsulmicpa.com'>{t.contact_us.email.email}</a>
                                </p>
                                
                            </div>
                            <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                                <form action='' methode='post' className={main.form}>
                                    <h5>{t.contact_us.form.letAQuickMsg}</h5>
                                    <div class="form-group">
                                        <label for="name">{t.contact_us.form.fullName.title}</label>
                                        <input type="text" class="form-control" id="name" placeholder={t.contact_us.form.fullName.placeholder} />
                                    </div>
                                    <div class="form-group">
                                        <label for="email">{t.contact_us.form.email.title}</label>
                                        <input type="email" class="form-control" id="email" placeholder={t.contact_us.form.email.placeholder} required />
                                        <small id="nameHelp" class="form-text text-muted">{t.contact_us.form.emailHelp}</small>                                    
                                    </div>
                                    <div class="form-group">
                                        <label for="message">{t.contact_us.form.message.title}</label>
                                        <textarea rows='4' type="text" class="form-control" id="message" placeholder={t.contact_us.form.message.placeholder} />
                                    </div>
                                    <div class="form-check">
                                    </div>
                                    <button type="submit" class="btn btn-primary">{t.contact_us.form.send}</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}