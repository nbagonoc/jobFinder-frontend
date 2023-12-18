import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AuthContextProvider } from './context/auth/AuthContext'
import { JobContextProvider } from './context/jobs/JobContext'
import { UserContextProvider } from './context/users/UserContext'
import { ApplicationContextProvider } from './context/applications/ApplicationContext'

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthContextProvider>
        <UserContextProvider>
            <JobContextProvider>
                <ApplicationContextProvider>
                    <App />
                </ApplicationContextProvider>
            </JobContextProvider>
        </UserContextProvider>
    </AuthContextProvider>
)
