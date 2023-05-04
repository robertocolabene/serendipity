'use client';
import React, { Suspense } from 'react';
import { PublicStore } from '@/lib/store';

export default class Paragrafo extends React.Component {

    async componentDidMount() {
        const data = await PublicStore.get('/test')
        console.log(data)
        console.log(this.context)
    }

    render(){
        return (
            <>
                <p className={this.props.styles.test}>
                    Questo è la descrizione
                </p>
            </>     
        );
    }  
}