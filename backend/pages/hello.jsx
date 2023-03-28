
import React from 'react'
import DefaultLayout from '../views/layouts/default'

export default function HelloMessage(props) {
  return (
    <DefaultLayout title={props.titolo}>
      <div>Halo puttanone {props.name}</div>
    </DefaultLayout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      name:'asd',
      titolo:'qweqwe'
    },
  }
}