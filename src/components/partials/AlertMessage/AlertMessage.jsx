import { useJobContext } from '../../../hooks/useJobContext'
import { useApplicationContext } from '../../../hooks/useApplicationContext'
import { useAuthContext } from '../../../hooks/useAuthContext'
import { useUserContext } from '../../../hooks/useUserContext'

import Alert from './Alert'

const AlertMessage = () => {
    const jobContext = useJobContext()
    const authContext = useAuthContext()
    const applicationContext = useApplicationContext()
    const userContext = useUserContext()

    const contexts = [
        { alert: jobContext.alert, handleClose: () => jobContext.dispatch({ type: 'CLEANER' }) },
        { alert: authContext.alert, handleClose: () => authContext.dispatch({ type: 'CLEANER' }) },
        { alert: applicationContext.alert, handleClose: () => applicationContext.dispatch({ type: 'CLEANER' }) },
        { alert: userContext.alert, handleClose: () => userContext.dispatch({ type: 'CLEANER' }) }
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
