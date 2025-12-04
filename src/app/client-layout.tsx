// src/app/client-layout.tsx
'use client'

import { Provider } from 'react-redux'
import { store } from '@/store/store'
import { hydrate } from '@/store/features/auth/authSlice'
import { useEffect } from 'react'
import QueryProvider from '@/providers/query-provider'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    store.dispatch(hydrate())
  }, [])

  return (
    <Provider store={store}>
      <QueryProvider>
        {children}
      </QueryProvider>
    </Provider>
  )
}