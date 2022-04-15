import Link from 'next/link';
import { useEffect } from 'react'
import {useRouter} from 'next/router'

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            
            router.push('/')
        }, 3000)
    }, []);
    return ( 

        <div className="not-found">
        <h1> Oho!</h1>
        <h3>Sivua ei löydy</h3>
        <p>Palaa takaisin etusivulle <Link href="/"><a>tästä</a></Link></p>
        </div>
     );
}
 
export default NotFound;