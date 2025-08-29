'use client'

import React, { useEffect, useState, ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { getMe } from '@/lib/api/clientApi'

interface AuthProviderProps {
  children: ReactNode
  requireAuth?: boolean 
}

export default function AuthProvider({ children, requireAuth = false }: AuthProviderProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await getMe() 
        setIsAuthenticated(true)
      } catch {
        setIsAuthenticated(false)
        if (requireAuth) router.push('/sign-in')
      } finally {
        setIsLoading(false)
      }
    }
    checkAuth()
  }, [requireAuth, router])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (requireAuth && !isAuthenticated) {
    return null 
  }

  return <>{children}</>
}
