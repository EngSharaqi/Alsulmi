import Services_details from '../../components/servics_details.js'
import { useRouter } from 'next/router'
import en from '../../locales/en'
import ar from '../../locales/ar'
// var router = useRouter();
// let t = router.locale === 'en' ? en : ar;

export default function Financial_consulting (){
    var router = useRouter();
    let t = router.locale === 'en' ? en : ar;
    return (
        <>   
            <Services_details
                icon='fas fa-university'
                title={`${t.our_services.financial_consulring.title}`}
                desc={`${t.our_services.financial_consulring.desc}`}
            />
        </>
    );
}