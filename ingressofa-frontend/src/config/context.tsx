import React from 'react'
import { ConfigData, ConfigProvider } from './ConfigProvider'

export const ConfigContext = React.createContext<ConfigData>(
  ConfigProvider.config,
)
interface ConfigProviderProps {
    children?: any
}
export const ConfigContextProvider: React.FC<ConfigProviderProps> = ({children}) => {
  return (
    <ConfigContext.Provider value={ConfigProvider.config}>
      {children}
    </ConfigContext.Provider>
  )
}