import React from 'react'
import { Header } from './components/Header'
import { Logo } from '@/components/Shared'


export const page = () => {
  return (
    <div>
      <Logo></Logo>
      Admin page

        <Header/>
    </div>
  )
}
