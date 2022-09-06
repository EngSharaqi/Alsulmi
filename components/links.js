
import main from '../styles/nav.module.css'
import { useRouter } from "next/router";
import Link from 'next/link'

import en from '../locales/en';
import ar from '../locales/ar';
export default function Links() {
    var router = useRouter();
    let t = router.locale === 'en' ? en : ar;

    var handleLang = (e) => {
        var val = e.target.value;
        router.push(`/` + `${val}`);
    }

    var handleForm = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <ul class={`navbar-nav ml-auto mt-2 mt-lg-0 ${main.fUL}`}>
               
                <li className={router.pathname == "/" ? `nav-item ${main.active}` : "nav-item"}>
                    <Link href="/">
                        <a class="nav-link">{t.home}</a>
                    </Link>
                </li>
                <li className={router.pathname == "/aboutus" ? `nav-item ${main.active}` : "nav-item"}>
                    <Link href="/Aboutus">
                        <a class="nav-link">{t.aboutus}</a>
                    </Link>
                </li>

                <li className={router.pathname == "/services" ? `nav-item ${main.active}` : "nav-item"}>
                    <Link href="/services">
                        <a class="nav-link">{t.services}</a>
                    </Link>
                </li>

                <li className={router.pathname == "/contactus" ? `nav-item ${main.active}` : "nav-item"}>
                    <Link href="/contactus">
                        <a class="nav-link">{t.contactus}</a>
                    </Link>
                </li>

                <li className={router.pathname == "/blog" ? `nav-item ${main.active}` : "nav-item"}>
                    <Link href="/blog">
                        <a class="nav-link">{t.blog}</a>
                    </Link>
                </li>

                <li>
                    <a class="nav-link">
                        <form onClick={handleForm}>
                            <input type='submit' onClick={handleLang} class={`btn btn-primary ${main.lang_btn}`} value={router.locale === 'en' ? 'ar' : 'en'} />
                        </form>
                    </a>
                </li>


                
                
                {/* <li class="nav-item">
                    <div className={`nav-link ${main.lang_par}`}>
                        <form onClick={handleForm}>
                            <input type='submit' onClick={handleLang} class={'btn btn-success'} value={router.locale === 'en' ? 'ar': 'en'}/>
                        </form>
                    </div>
                </li> */}
                {/* <li class={`nav-item ${main.orderNowF}`}>
                    <a class="nav-link" style={{'padding-top': '0'}} href='#'>
                        <button className={`btn btn ${main.orderNow}`}>{t.orderNow} <i class="fab fa-whatsapp"></i></button>
                    </a>
                </li> */}
            </ul>
        </>
    )
}
