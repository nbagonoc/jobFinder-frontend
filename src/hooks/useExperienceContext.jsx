import { ExperienceContext } from '../context/experiences/ExperienceContext'
import { useContext } from 'react'

export const useExperienceContext = () => {
    const context = useContext(ExperienceContext)

    if (!context) {
        throw new Error('useExperienceContext must be used within a useExperienceContextProvider')
    }

    return context
}
