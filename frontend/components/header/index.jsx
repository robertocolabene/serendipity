//import styles from './header.module.css';
import Logo from './ui/logo';
import Link from 'next/link'

export default function Header() {
    return (
        <header className="flex">
            <div className="w-1/12">
                <Logo/>    
            </div>
            <div className="w-1/3">
                <Link href="/" className="mr-2">Home</Link>  
                <Link href="/about">About</Link> 
            </div>     
        </header>
    );
}


