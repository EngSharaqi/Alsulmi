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
                                <p>{t.contact_us.address.desc}</p>

                                <h5>{t.contact_us.phone.title}</h5>
                                <p>{t.contact_us.phone.a}</p>
                                <p>{t.contact_us.phone.b}</p>

                                <h5>{t.contact_us.email.title}</h5>
                                <p>{t.contact_us.email.email}</p>
                                
                            </div>
                            <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                                <form>
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
                                    <button type="submit" class="btn btn-primary">{t.contact_us.form.submit}</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}