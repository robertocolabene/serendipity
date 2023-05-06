'use client';
import { useTheme, useThemeUpdate } from '@/context/providers/theme';
import useFetch from '@/hooks/useFetch';
import useLocalStorage from '@/hooks/useLocalStorage';
import React from 'react';

export default function Paragrafo(props) {

    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()

    const { data, loading, error, refetch } = useFetch('/test');

    const [ order, setOrder ] = useLocalStorage('order_banner','asc');

    if(loading) return <h1>Loading...</h1>;

    if(error) console.log(error);

    return (
        <>
            <p className={props.styles.test}>
                Questo è il paragrafo del banner {data?.test} {order} {darkTheme ? 'dark' : 'light'}
            </p>
            <button onClick={(e) => refetch()}>Refetch</button>
            <button onClick={(e) => setOrder('desc')}>Set Desc</button>
            <button onClick={toggleTheme}>Change Theme</button>
        </>     
    );
}