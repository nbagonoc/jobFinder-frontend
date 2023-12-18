import { ApplicationContext } from '../context/applications/ApplicationContext'
import { useContext } from 'react'

export const useApplicationContext = () => {
    const context = useContext(ApplicationContext)

    if (!context) {
        throw new Error('useApplicationContext must be used within a useApplicationContextProvider')
    }

    return context
}
