import { UserContext } from '../context/users/UserContext'
import { useContext } from 'react'

export const useUserContext = () => {
    const context = useContext(UserContext)

    if (!context) {
        throw new Error('useUserContext must be used within a useUserContextProvider')
    }

    return context
}
