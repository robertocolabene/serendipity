'use client';
import { ThemeContext } from '@/context/providers/theme';
import useFetch from '@/hooks/useFetch';
import useLocalStorage from '@/hooks/useLocalStorage';
import React, { Suspense, useContext, useEffect } from 'react';

export default function Paragrafo(props) {

    const theme = useContext(ThemeContext);

    const { data, loading, error, refetch } = useFetch('/test');

    const [ order, setOrder ] = useLocalStorage('order_banner','asc');

    if(loading) return <h1>Loading...</h1>;

    if(error) console.log(error);

    return (
        <>
            <p className={props.styles.test}>
                Questo è il paragrafo del banner {data?.test} {order} {theme.template} {theme.mode}
            </p>
            <button onClick={(e) => refetch()}>Refetch</button>
            <button onClick={(e) => setOrder('desc')}>Set Desc</button>
        </>     
    );
}