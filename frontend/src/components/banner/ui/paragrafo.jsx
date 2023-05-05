'use client';
import useFetch from '@/hooks/useFetch';
import React, { Suspense, useEffect } from 'react';

export default function Paragrafo(props) {

    const { data, loading, error, refetch } = useFetch('/test');

    if(loading) return <h1>Loading...</h1>;

    if(error) console.log(error);

    return (
        <>
            <p className={props.styles.test}>
                Questo è il paragrafo del banner {data?.test}
            </p>
            <button onClick={(e) => refetch()}>Refetch</button>
        </>     
    );
}