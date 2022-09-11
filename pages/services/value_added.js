import Services_details from '../../components/servics_details.js'
import { useRouter } from 'next/router'
import en from '../../locales/en'
import ar from '../../locales/ar'

export default function Value_added (){
    var router = useRouter();
    let t = router.locale === 'en' ? en : ar;
    return (
        <>   
            <Services_details
                icon='fas fa-file-invoice-dollar'
                title={`${t.our_services.value_added.title}`}
                desc={`${t.our_services.value_added.desc}`}
            />
        </>
    );
}