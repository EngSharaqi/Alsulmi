import Link from 'next/link'
import main from '../styles/services.module.css'
export default function Services (props){
    return (
        <>
             {/* Our Services */}
             <h1>{props.t}</h1>
      <div className={`row ${main.our_services}`}>
        <div className='container'>
          <h4>Our Services</h4>
          <div className='row'>
            <div className='col-xs-6 col-sm-6 col-md-3 col-lg-3' style={{ 'padding': '5px' }}>
              <div className={`card ${main.card}`}>
              <Link href='/services/value_added'>
              <a>
                <p>
                  <i class="fas fa-file-invoice-dollar"></i>
                </p>
                <h6>Value Added Services</h6>
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
                <h6>Internal audit</h6>
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
                <h6>Preparing financial statements</h6>
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
                <h6>Zakat and income reports</h6>
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
                <h6>Accounting bookkeeping</h6>
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
                <h6>Financial consulting</h6>
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
                <h6>Accounting software</h6>
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
                <h6>Tax and Zakat Consulting</h6>
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