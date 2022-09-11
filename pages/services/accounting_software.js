import Services_details from '../../components/servics_details.js'
import { useRouter } from 'next/router'
import en from '../../locales/en'
import ar from '../../locales/ar'

export default function Accounting_software (){
    var router = useRouter();
    let t = router.locale === 'en' ? en : ar;
    return (
        <>   
            <Services_details
                icon='fas fa-desktop'
                title={`${t.our_services.accounting_software.title}`}
                desc={`${t.our_services.accounting_software.desc}`}
            />
        </>
    );
}