import './App.css'

import Login from './pages/auth/Login'
import Register from './pages/auth/Register'

import JobList from './pages/jobs/JobList'
import JobView from './pages/jobs/JobView'
import JobCreate from './pages/jobs/JobCreate'
import JobEdit from './pages/jobs/JobEdit'

import Home from './pages/Home'
import Navigation from './components/partials/Navigation'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { useAuthContext } from './hooks/useAuthContext'

const App = () => {
    const { user } = useAuthContext()

    return (
        <BrowserRouter>
            <Navigation />
            <div className='container mt-3'>
                <Routes>
                    <Route path='/' element={<Home />} />

                    {/* Auth */}
                    <Route
                        path='/login'
                        element={user ? <Navigate to='/' /> : <Login />}
                    />
                    <Route
                        path='/register'
                        element={user ? <Navigate to='/' /> : <Register />}
                    />

                    {/* Jobs */}
                    <Route path='/jobs' element={<JobList />} />
                    <Route path='/jobs/view/:_id' element={<JobView />} />
                    <Route
                        path='/jobs/create'
                        element={ user && user.role === 'admin' ? <JobCreate />  : <Navigate to='/' />}
                    />
                    <Route
                        path='/jobs/edit/:_id'
                        element={ user && user.role === 'admin' ? <JobEdit />  : <Navigate to='/' />}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
