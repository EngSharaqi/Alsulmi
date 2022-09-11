import Services_details from '../../components/servics_details.js'
import { useRouter } from 'next/router'
import en from '../../locales/en'
import ar from '../../locales/ar'


export default function Preparing_financial_statements (){
    var router = useRouter();
    let t = router.locale === 'en' ? en : ar;
    return (
        <>   
            <Services_details
                icon='fas fa-coins'
                title={`${t.our_services.preparing_financial_statements.title}`}
                desc={`${t.our_services.preparing_financial_statements.desc}`}
            />
        </>
    );
}