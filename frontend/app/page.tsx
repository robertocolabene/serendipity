import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import React, { Suspense } from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { getBlock } from '@/components'
import { NextRequest } from 'next/server'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Home',
    description: 'desc home'
  };
}

async function blocks() {
  
}

export default async function Home() {
  //const [seo] = await Promise.all([getSeo()]);
  const blocks = [
    {
      _uid: 1,
      component: 'Banner'
    },
    {
      _uid: 2,
      component: 'Carousel'
    }
  ];

  const Test = blocks[0];

  return (
    <>  
      {blocks.map(block => getBlock(block))}
    </>  
  )
}