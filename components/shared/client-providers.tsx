'use client'
import React from 'react'
import useCartSidebar from '@/hooks/use-cart-sidebar'
import { Toaster } from 'sonner'
import CartSidebar from './cart-sidebar'

export default function ClientProviders({
  children,
}: {
//   setting: ClientSetting
  children: React.ReactNode
}) {
  const isCartSideBarOpen = useCartSidebar()

  return (
    <>
        { isCartSideBarOpen ? (
          <div className='flex min-h-screen'>
            <div className='flex-1 overflow-hidden'>{children}</div>
            <CartSidebar />
          </div>
        ) : (
          <div>{children}</div>
        )}
        <Toaster/>
    </>
  )
}