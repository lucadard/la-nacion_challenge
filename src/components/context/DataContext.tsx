import { createContext, ReactNode, useContext } from 'react'
import { useWindowWidth } from '../hooks/useWindowWidth'

type CountProviderProps = { children: ReactNode }

const CountStateContext = createContext<{ clientWidth: number } | undefined>(
  undefined
)

function DataProvider({ children }: CountProviderProps) {
  const clientWidth = useWindowWidth()
  const value = { clientWidth }
  return (
    <CountStateContext.Provider value={value}>
      {children}
    </CountStateContext.Provider>
  )
}

function useData() {
  const context = useContext(CountStateContext)
  if (context === undefined) {
    throw new Error('useCount must be used within a DataProvider')
  }
  return context
}

export { DataProvider, useData }
