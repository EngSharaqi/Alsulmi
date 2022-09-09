import logo from '../public/images/logo.PNG'
import main from '../styles/footer.module.css'

export default function Footer() {
    return (
        <>
            {/* Footer */}
            <footer className={main.footer}>
                <div className={`row ${main.map}`}>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.0946008403116!2d46.74045759999999!3d24.7579454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f032378ca29e1%3A0x5aed5c347184e08b!2z2LTYsdmD2Kkg2KfYqNix2KfZh9mK2YUg2KfZhNiz2YTZhdmKINmF2K3Yp9iz2KjZiNmGINmI2YXYsdin2KzYudmI2YYg2YLYp9mG2YjZhtmK2YjZhg!5e0!3m2!1sen!2seg!4v1662674332228!5m2!1sen!2seg"
                    allowfullscreen=""
                    height="100vh"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
                </div>
                <div className='row'>
                    <div className='container'>
                        <img src={logo.src} />
                        <h6>All Rights Reserved &copy; Alsulmi CPA 2020-2022</h6>
                        <h6>Phone: <a href='tel:+966114846664'>+966 114 846 664</a> - <a href='tel:+966560229188'>+966 560 229 188</a></h6>
                        <p className={`${main.social}`}>
                            <ul>
                                <a href='/'>
                                    <li>
                                        <i class="far fa-envelope"></i>
                                    </li>
                                </a>
                                <a href='/'>
                                    <li>
                                        <i class="fa-brands fa-linkedin-in"></i>
                                    </li>
                                </a>
                                <a href='/'>
                                    <li>
                                        <i class="fa-brands fa-twitter"></i>
                                    </li>
                                </a>
                                <a href='/'>
                                    <li>
                                        <i class="fa-brands fa-facebook-f"></i>
                                    </li>
                                </a>
                            </ul>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

