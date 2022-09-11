import Services_details from '../../components/servics_details.js'
import { useRouter } from 'next/router'
import en from '../../locales/en'
import ar from '../../locales/ar'

export default function Internal_audit (){
    var router = useRouter();
    let t = router.locale === 'en' ? en : ar;
    return (
        <>   
            <Services_details
                icon='fas fa-search-dollar'
                title={`${t.our_services.internal_audit.title}`}
                desc={`${t.our_services.internal_audit.desc}`}
            />
        </>
    );
}