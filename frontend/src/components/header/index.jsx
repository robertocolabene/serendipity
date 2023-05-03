//import styles from './header.module.css';
import Logo from './ui/logo';
import Link from 'next/link'
import Config from './config.json'
import { getDictionary } from './dictionaries';


export default async function Header() {
    const lang = await getDictionary('it');
    return (
        <header className="flex">
            <div className="w-1/12">
                <Logo/>   {lang.welcome} {Config.id}
            </div>
            <div className="w-1/3">
                <Link href="/" className="mr-2">Home</Link>  
                <Link href="/about">About</Link> 
            </div>     
        </header>
    );
}


