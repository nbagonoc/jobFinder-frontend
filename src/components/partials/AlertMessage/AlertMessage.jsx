import { useJobContext } from '../../../hooks/useJobContext'
import { useApplicationContext } from '../../../hooks/useApplicationContext'
import { useAuthContext } from '../../../hooks/useAuthContext'
import { useUserContext } from '../../../hooks/useUserContext'
import { useEducationContext } from '../../../hooks/useEducationContext'
import { useExperienceContext } from '../../../hooks/useExperienceContext'
import { useSkillContext } from '../../../hooks/useSkillContext'

import Alert from './Alert'

const AlertMessage = () => {
    const jobContext = useJobContext()
    const authContext = useAuthContext()
    const applicationContext = useApplicationContext()
    const userContext = useUserContext()
    const EducationContext = useEducationContext()
    const ExperienceContext = useExperienceContext()
    const SkillContext = useSkillContext()

    const contexts = [
        { alert: jobContext.alert, handleClose: () => jobContext.dispatch({ type: 'CLEANER' }) },
        { alert: authContext.alert, handleClose: () => authContext.dispatch({ type: 'CLEANER' }) },
        { alert: applicationContext.alert, handleClose: () => applicationContext.dispatch({ type: 'CLEANER' }) },
        { alert: userContext.alert, handleClose: () => userContext.dispatch({ type: 'CLEANER' }) },
        { alert: EducationContext.alert, handleClose: () => EducationContext.dispatch({ type: 'CLEANER' }) },
        { alert: ExperienceContext.alert, handleClose: () => ExperienceContext.dispatch({ type: 'CLEANER' }) },
        { alert: SkillContext.alert, handleClose: () => SkillContext.dispatch({ type: 'CLEANER' }) }
    ]

    const renderAlerts = contexts.map(({ alert, handleClose }, index) => {
        return (
            <Alert
                key={index}
                alert={alert}
                handleClose={handleClose}
            />
        )
    })

    return (
        <div data-testid='AlertMessage'>
            {renderAlerts}
        </div>
    )
}

export default AlertMessage
