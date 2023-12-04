import { useGlobalContext } from '../../hooks/useGlobalContext'
import { useJobContext } from '../../hooks/useJobContext'
import { useAuthContext } from '../../hooks/useAuthContext'

const AlertMessage = () => {
    const { alert: globalAlert, dispatch: globalDispatch } = useGlobalContext()
    const { alert: jobAlert, dispatch: jobDispatch } = useJobContext()
    const { alert: authAlert, dispatch: authDispatch } = useAuthContext()

    const handleClose = () => {
        if (globalDispatch) {
            globalDispatch({ type: 'CLEAR_ALERT' })
        }
        if (jobDispatch) {
            jobDispatch({ type: 'CLEANER' })
        }
        if (authDispatch) {
            authDispatch({ type: 'CLEANER' })
        }
    }

    return (
        <div data-testid='AlertMessage'>
            {(globalAlert && globalAlert.message) && (
                <div
                    className={`alert alert-${
                        globalAlert.success ? 'success' : 'warning'
                    } alert-dismissible fade show`}
                    role='alert'
                >
                    <strong>{globalAlert.message}</strong>
                    <button
                        type='button'
                        className='btn-close'
                        data-bs-dismiss='alert'
                        aria-label='Close'
                        onClick={handleClose}
                    ></button>
                </div>
            )}
            {(jobAlert && jobAlert.message) && (
                <div
                    className={`alert alert-${
                        jobAlert.success ? 'success' : 'warning'
                    } alert-dismissible fade show`}
                    role='alert'
                >
                    <strong>{jobAlert.message}</strong>
                    <button
                        type='button'
                        className='btn-close'
                        data-bs-dismiss='alert'
                        aria-label='Close'
                        onClick={handleClose}
                    ></button>
                </div>
            )}
            {(authAlert && authAlert.message) && (
                <div
                    className={`alert alert-${
                        authAlert.success ? 'success' : 'warning'
                    } alert-dismissible fade show`}
                    role='alert'
                >
                    <strong>{authAlert.message}</strong>
                    <button
                        type='button'
                        className='btn-close'
                        data-bs-dismiss='alert'
                        aria-label='Close'
                        onClick={handleClose}
                    ></button>
                </div>
            )}
        </div>
    )
}

export default AlertMessage
