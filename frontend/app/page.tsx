import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import React, { Suspense } from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import * as components from '@/components'

React

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Home',
    description: 'desc home'
  };
}

export default async function Home() {
  //const [seo] = await Promise.all([getSeo()]);
  const blocks = [
    components['Banner'],
    components['Carousel']
  ];

  return (
    <>  
      {blocks.map((block,index) => 
        <React.Fragment key={index}>
          {block}
        </React.Fragment>
      )}
    </>  
  )
}


//<components.Banner/>
//{/* @ts-expect-error Server Component */} <components.Carousel/>
