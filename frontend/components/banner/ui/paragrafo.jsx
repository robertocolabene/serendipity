'use client';
import React from 'react';

export default class Paragrafo extends React.Component {
    render(){
        return (
            <p className={this.props.styles.test}>
                Questo è la descrizione
            </p>
        );
    }  
}