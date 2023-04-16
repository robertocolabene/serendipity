import Image from 'next/image';

export default function Logo(){
    return (
        <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            width={100}
            height={24}
            priority
        />
    );
}