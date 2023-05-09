'use client';
import { useTheme } from '@/context/theme';
import { useFetch, useLocalStorage, useToggle } from '@/hooks'
import React, { useRef } from 'react';

type Test = {
    test: string,
    asd: string
}

export default function Paragrafo(props: any) {

    const { theme , darkTheme, toggleDarkTheme }: any = useTheme()
   
    const { data, loading, error, refetch } = useFetch<Test>('/test');

    const [ order, setOrder ] = useLocalStorage('order_banner','asc');

    const { current: test } = useRef('test');

    const [ asd, toggleAsd ] = useToggle();

    const [ name, setName ] = useLocalStorage('name','');

    if(loading) return <h1>Loading...</h1>;

    if(error) console.log(error);

    return (
        <>
            <p className={props.styles.test}>
                Questo è il paragrafo del banner {data?.test} {order} {theme.template} {darkTheme ? 'dark' : 'light'} {test} {asd ? 'true' : 'false'}
            </p>
            <button onClick={(e) => refetch()}>Refetch</button>
            <button onClick={(e) => setOrder('desc')}>Set Desc</button>
            <button onClick={toggleDarkTheme}>Change Theme</button>
            <button onClick={toggleAsd}>Change ASD</button>
            <input onChange={(e) => setName(e.target.value)} value={name}/>
        </>     
    );
}