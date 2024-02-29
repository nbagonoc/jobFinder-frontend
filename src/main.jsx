import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AuthContextProvider } from './context/auth/AuthContext'
import { JobContextProvider } from './context/jobs/JobContext'
import { UserContextProvider } from './context/users/UserContext'
import { EducationContextProvider } from './context/educations/EducationContext'
import { ExperienceContextProvider } from './context/experiences/ExperienceContext'
import { ApplicationContextProvider } from './context/applications/ApplicationContext'


ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthContextProvider>
        <UserContextProvider>
            <EducationContextProvider>
                <ExperienceContextProvider>
                    <JobContextProvider>
                        <ApplicationContextProvider>
                            <App />
                        </ApplicationContextProvider>
                    </JobContextProvider>
                </ExperienceContextProvider>
            </EducationContextProvider>
        </UserContextProvider>
    </AuthContextProvider>
)
