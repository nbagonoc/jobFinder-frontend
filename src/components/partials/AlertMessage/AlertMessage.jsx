import { useGlobalContext } from '../../../hooks/useGlobalContext'
import { useJobContext } from '../../../hooks/useJobContext'
import { useAuthContext } from '../../../hooks/useAuthContext'
import Alert from './Alert'

const AlertMessage = () => {
    const globalContext = useGlobalContext()
    const jobContext = useJobContext()
    const authContext = useAuthContext()

    const contexts = [
        { alert: globalContext.alert, handleClose: () => globalContext.dispatch({ type: 'CLEAR_ALERT' }) },
        { alert: jobContext.alert, handleClose: () => jobContext.dispatch({ type: 'CLEANER' }) },
        { alert: authContext.alert, handleClose: () => authContext.dispatch({ type: 'CLEANER' }) }
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
