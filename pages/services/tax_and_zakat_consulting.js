import Services_details from '../../components/servics_details.js'
import { useRouter } from 'next/router'
import en from '../../locales/en'
import ar from '../../locales/ar'


export default function Tax_and_zakat_consulting (){
    var router = useRouter();
    let t = router.locale === 'en' ? en : ar;
    return (
        <>   
            <Services_details
                icon='fas fa-comment-dollar'
                title={`${t.our_services.tax_and_zakat_consulting.title}`}
                desc={`${t.our_services.tax_and_zakat_consulting.desc}`}
            />
        </>
    );
}