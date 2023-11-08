import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalProvider } from './context/GlobalContext'
import { AuthContextProvider } from './context/auth/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthContextProvider>
        <GlobalProvider>
            <App />
        </GlobalProvider>
    </AuthContextProvider>
)
