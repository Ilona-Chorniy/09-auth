import React, { ReactNode } from 'react'
import AuthProvider from '@/components/AuthProvider/AuthProvider'

interface AuthLayoutProps {
  children: ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <AuthProvider>
      <div>
        <div>
          {children}
        </div>
      </div>
    </AuthProvider>
  )
}
