import { SkillContext } from '../context/skills/SkillContext'
import { useContext } from 'react'

export const useSkillContext = () => {
    const context = useContext(SkillContext)

    if (!context) {
        throw new Error('useSkillContext must be used within a useSkillContextProvider')
    }

    return context
}
