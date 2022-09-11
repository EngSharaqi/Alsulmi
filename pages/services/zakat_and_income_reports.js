import Services_details from '../../components/servics_details.js'
import { useRouter } from 'next/router'
import en from '../../locales/en'
import ar from '../../locales/ar'


export default function Zakat_and_income_reports (){
    var router = useRouter();
    let t = router.locale === 'en' ? en : ar;
    return (
        <>   
            <Services_details
                icon='fas fa-comment-dollar'
                title={`${t.our_services.zakat_and_income_reports.title}`}
                desc={`${t.our_services.zakat_and_income_reports.desc}`}
            />
        </>
    );
}