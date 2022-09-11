import Link from 'next/link'
import main from '../styles/services.module.css'
import en from '../locales/en'
import ar from '../locales/ar'
import { useRouter } from 'next/router'
export default function Services (props){
  var router = useRouter();
  let t = router.locale === 'en' ? en : ar;
    return (
        <>
             {/* Our Services */}
             <h1>{props.t}</h1>
      <div className={`row ${main.our_services}`}>
        <div className='container'>
          <h4>{t.our_services.title}</h4>
          <div className='row'>
            <div className='col-xs-6 col-sm-6 col-md-3 col-lg-3' style={{ 'padding': '5px' }}>
              <div className={`card ${main.card}`}>
              <Link href='/services/value_added'>
              <a>
                <p>
                  <i class="fas fa-file-invoice-dollar"></i>
                </p>
                <h6>{t.our_services.value_added.title}</h6>
              </a>
              </Link>
              </div>
            </div>
            <div className='col-xs-6 col-sm-6 col-md-3 col-lg-3' style={{ 'padding': '5px' }}>
              <div className={`card ${main.card}`}>
              <Link href='/services/internal_audit'>
              <a>
                <p>
                  <i class="fas fa-search-dollar"></i>
                </p>
                <h6>{t.our_services.internal_audit.title}</h6>
              </a>
              </Link>
              </div>
            </div>
            <div className='col-xs-6 col-sm-6 col-md-3 col-lg-3' style={{ 'padding': '5px' }}>
              <div className={`card ${main.card}`}>
              <Link href='/services/preparing_financial_statements'>
              <a>
                <p>
                  <i class="fas fa-coins"></i>
                </p>
                <h6>{t.our_services.preparing_financial_statements.title}</h6>
              </a>
              </Link>
              </div>
            </div>
            <div className='col-xs-6 col-sm-6 col-md-3 col-lg-3' style={{ 'padding': '5px' }}>
              <div className={`card ${main.card}`}>
              <Link href='/services/zakat_and_income_reports'>
              <a>
                <p>
                  <i class="fas fa-comment-dollar"></i>
                </p>
                <h6>{t.our_services.zakat_and_income_reports.title}</h6>
              </a>
              </Link>
              </div>
            </div>

            <div className='col-xs-6 col-sm-6 col-md-3 col-lg-3' style={{ 'padding': '5px' }}>
              <div className={`card ${main.card}`}>
              <Link href='/services/accounting_bookkeeping'>
              <a>
                <p>
                  <i class="fas fa-receipt"></i>
                </p>
                <h6>{t.our_services.accounting_bookkeeping.title}</h6>
              </a>
              </Link>
              </div>
            </div>
            <div className='col-xs-6 col-sm-6 col-md-3 col-lg-3' style={{ 'padding': '5px' }}>
              <div className={`card ${main.card}`}>
              <Link href='/services/financial_consulring'>
              <a>
                <p>
                  <i class="fas fa-university"></i>
                </p>
                <h6>{t.our_services.financial_consulring.title}</h6>
              </a>
              </Link>
              </div>
            </div>
            <div className='col-xs-6 col-sm-6 col-md-3 col-lg-3' style={{ 'padding': '5px' }}>
              <div className={`card ${main.card}`}>
              <Link href='/services/accounting_software'>
              <a>
                <p>
                  <i class="fas fa-desktop"></i>
                </p>
                <h6>{t.our_services.accounting_software.title}</h6>
              </a>
              </Link>
              </div>
            </div>
            <div className='col-xs-6 col-sm-6 col-md-3 col-lg-3' style={{ 'padding': '5px' }}>
              <div className={`card ${main.card}`}>
              <Link href='/services/tax_and_zakat_consulting'>
              <a>
                <p>
                  <i class="fas fa-hand-holding-usd"></i>
                </p>
                <h6>{t.our_services.tax_and_zakat_consulting.title}</h6>
              </a>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

        </>
    );
}