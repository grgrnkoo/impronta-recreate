'use client'
import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

const TransitionContext = createContext<{ isTransition: boolean, previousPath: string | null }>({
  isTransition: false,
  previousPath: null,
})

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const previous = useRef<string | null>(null)
  const [isTransition, setIsTransition] = useState(false)

  useEffect(() => {
    setIsTransition(previous.current !== null)
    previous.current = pathname
  }, [pathname])

  return (
    <TransitionContext.Provider value={{ isTransition, previousPath: previous.current }}>
      {children}
    </TransitionContext.Provider>
  )
}

export function useTransitionTracker() {
  return useContext(TransitionContext)
}
