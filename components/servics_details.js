import Services from './services'
import main from '../styles/servs_details.module.css'
export default function Service_Details(props) {
    return (
        <>
            <div className={`row ${main.srvs_detalis}`}>
                <div className='container'>
                    <div className='row'>
                        <i className={props.icon}></i>
                    </div>
                    <h4>{props.title}</h4>
                    <p>{props.desc}</p>
                </div>
            </div>
            <Services />
        </>
    );
}