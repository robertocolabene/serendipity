'use client';
import React, { Suspense } from 'react';
import { PublicStore } from '@/core/store-api';

export default class Paragrafo extends React.Component {

    async componentDidMount() {
        const data = await PublicStore.get('/test')
        console.log(data)
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