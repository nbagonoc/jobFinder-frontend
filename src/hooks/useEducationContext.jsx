import { EducationContext } from '../context/educations/EducationContext'
import { useContext } from 'react'

export const useEducationContext = () => {
    const context = useContext(EducationContext)

    if (!context) {
        throw new Error('useEducationContext must be used within a useEducationContextProvider')
    }

    return context
}
