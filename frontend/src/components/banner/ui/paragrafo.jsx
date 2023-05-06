'use client';
import { useTheme } from '@/context/providers/theme';
import useFetch from '@/hooks/useFetch';
import useLocalStorage from '@/hooks/useLocalStorage';
import React, { useRef } from 'react';

export default function Paragrafo(props) {

    const { theme , darkTheme, toggleDarkTheme } = useTheme()
   
    const { data, loading, error, refetch } = useFetch('/test');

    const [ order, setOrder ] = useLocalStorage('order_banner','asc');

    const { current: test } = useRef('test');

    if(loading) return <h1>Loading...</h1>;

    if(error) console.log(error);

    return (
        <>
            <p className={props.styles.test}>
                Questo è il paragrafo del banner {data?.test} {order} {theme.template} {darkTheme ? 'dark' : 'light'} {test}
            </p>
            <button onClick={(e) => refetch()}>Refetch</button>
            <button onClick={(e) => setOrder('desc')}>Set Desc</button>
            <button onClick={toggleDarkTheme}>Change Theme</button>
        </>     
    );
}