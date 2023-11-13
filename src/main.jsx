import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalProvider } from './context/GlobalContext'
import { AuthContextProvider } from './context/auth/AuthContext'
import { JobContextProvider } from './context/jobs/JobContext'

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthContextProvider>
        <JobContextProvider>
            <GlobalProvider>
                <App />
            </GlobalProvider>
        </JobContextProvider>
    </AuthContextProvider>
)
