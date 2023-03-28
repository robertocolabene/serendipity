import React from 'react'
import Head from 'next/head'

export default function DefaultLayout(props) {
  return (
    <>
      <Head><title>{props.title}</title></Head>
      {props.children}
    </>
  )
}