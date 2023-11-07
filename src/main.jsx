import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalProvider } from './context/GlobalContext'
import { AuthContext } from './context/auth/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthContext>
        <GlobalProvider>
            <App />
        </GlobalProvider>
    </AuthContext>
)
