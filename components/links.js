
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
                <li className={router.pathname == "/aboutus" ? `nav-item ${main.active} ${main.aboutUsF}` : `nav-item ${main.aboutUsF}`}>
                    <a class="nav-link">{t.aboutus}</a>
                    <ul>
                        <li>
                            <Link href='/#about_us'>
                                <a className='nav-link'>About us</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/#our_value'>
                                <a className='nav-link'>Our value</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/#why_us'>
                                <a className='nav-link'>Why us</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/#testimonials'>
                                <a className='nav-link'>Testemonials</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/#our_team'>
                                <a className='nav-link'>Team members</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/#parteners'>
                                <a className='nav-link'>Parteners</a>
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className={
                    router.pathname == "/services"
                        || router.pathname == "/services/value_added"
                        || router.pathname == "/services/internal_audit"
                        || router.pathname == "/services/preparing_financial_statements"
                        || router.pathname == "/services/zakat_and_income_reports"
                        || router.pathname == "/services/accounting_bookkeeping"
                        || router.pathname == "/services/financial_consulring"
                        || router.pathname == "/services/accounting_software"
                        || router.pathname == "/services/tax_and_zakat_consulting"
                        ? `nav-item ${main.active} ${main.aboutUsF} ${main.servicesF}`
                        : `nav-item ${main.aboutUsF} ${main.servicesF}`}>

                    <Link href="/services">
                        <a class="nav-link">{t.services}</a>
                    </Link>
                    <ul>
                        <li className={router.pathname == "/services/value_added" ? `${main.activeLi}` : ''}>
                            <Link href='/services/value_added'>
                                <a className={`nav-link ${main.a}`}>Value added services</a>
                            </Link>
                        </li>
                        <li className={router.pathname == "/services/internal_audit" ? `${main.activeLi}` : ''}>
                            <Link href='/services/internal_audit'>
                                <a className={`nav-link ${main.a}`}>Internal audit</a>
                            </Link>
                        </li>
                        <li className={router.pathname == "/services/preparing_financial_statements" ? `${main.activeLi}` : ''}>
                            <Link href='/services/preparing_financial_statements'>
                                <a className={`nav-link ${main.a}`}>Preparing financial statements</a>
                            </Link>
                        </li>
                        <li className={router.pathname == "/services/zakat_and_income_reports" ? `${main.activeLi}` : ''}>
                            <Link href='/services/zakat_and_income_reports'>
                                <a className={`nav-link ${main.a}`}>Zakat and income reports</a>
                            </Link>
                        </li>
                        <li className={router.pathname == "/services/accounting_bookkeeping" ? `${main.activeLi}` : ''}>
                            <Link href='/services/accounting_bookkeeping'>
                                <a className={`nav-link ${main.a}`}>Accounting bookkeeping</a>
                            </Link>
                        </li>
                        <li className={router.pathname == "/services/financial_consulring" ? `${main.activeLi}` : ''}>
                            <Link href='/services/financial_consulring'>
                                <a className={`nav-link ${main.a}`}>Financial consulting</a>
                            </Link>
                        </li>
                        <li className={router.pathname == "/services/accounting_software" ? `${main.activeLi}` : ''}>
                            <Link href='/services/accounting_software'>
                                <a className={`nav-link ${main.a}`}>Accounting software</a>
                            </Link>
                        </li>
                        <li className={router.pathname == "/services/tax_and_zakat_consulting" ? `${main.activeLi}` : ''}>
                            <Link href='/services/tax_and_zakat_consulting'>
                                <a className={`nav-link ${main.a}`}>Tax and Zakat Consulting</a>
                            </Link>
                        </li>
                    </ul>

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
            </ul>
        </>
    )
}
