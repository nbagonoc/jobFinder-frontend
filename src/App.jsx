import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import './App.css'

import Login from './pages/auth/Login'
import RegisterSelect from './pages/auth/RegisterSelect'
import Register from './pages/auth/Register'

import UserProfile from './pages/users/UserProfile'
import UserPublicProfile from './pages/users/UserPublicProfile'

import JobListRecruiter from './pages/jobs/JobListRecruiter'
import JobList from './pages/jobs/JobList'
import JobView from './pages/jobs/JobView'
import JobCreate from './pages/jobs/JobCreate'
import JobEdit from './pages/jobs/JobEdit'

import ApplicationList from './pages/applications/ApplicationList'
import ApplicantList from './pages/applications/ApplicantList'

import Home from './pages/Home'
import Navigation from './components/partials/Navigation'

import { useAuthContext } from './hooks/useAuthContext'


const App = () => {
    const { user } = useAuthContext()

    return (
        <BrowserRouter>
            <Navigation />
                    <Routes>
                        <Route path='/' element={<Home />} />

                        {/* Auth */}
                        <Route
                            path='/login'
                            element={user ? <Navigate to='/' /> : <Login />}
                        />
                        <Route
                            path='/register'
                            element={user ? <Navigate to='/' /> : <RegisterSelect />}
                        />
                        <Route
                            path='/register-applicant'
                            element={user ? <Navigate to='/' /> : <Register />}
                        />
                        <Route
                            path='/register-recruiter'
                            element={user ? <Navigate to='/' /> : <Register />}
                        />

                        {/* Jobs */}
                        <Route path='/jobs' element={<JobList />} />
                        <Route
                            path='/jobs/owned'
                            element={
                                user && user.role === 'recruiter' ? (
                                    <JobListRecruiter />
                                ) : (
                                    <Navigate to='/' />
                                )
                            }
                        />
                        <Route
                            path='/jobs/view/:_id'
                            element={<JobView />}
                        />
                        <Route
                            path='/jobs/create'
                            element={
                                user && user.role === 'recruiter' ? (
                                    <JobCreate />
                                ) : (
                                    <Navigate to='/' />
                                )
                            }
                        />
                        <Route
                            path='/jobs/edit/:_id'
                            element={
                                user && user.role === 'recruiter' ? (
                                    <JobEdit />
                                ) : (
                                    <Navigate to='/' />
                                )
                            }
                        />

                        {/* Applications */}
                        <Route
                            path='/jobs/:_id/applicants'
                            element={<ApplicantList />}
                        />
                        <Route
                            path='/applications'
                            element={
                                user && user.role === 'applicant' ? (
                                    <ApplicationList />
                                ) : (
                                    <Navigate to='/' />
                                )
                            }
                        />

                        {/* Users */}
                        <Route
                            path='/profile'
                            // element={user ?  <UserProfile /> : <Navigate to='/login'/>} //for some reason, the user state is resetting to null when navigating to /profile?
                            element={<UserProfile />}
                        />
                        <Route
                            path='/applicant/:_id'
                            element={<UserPublicProfile />}
                        />
                </Routes>
        </BrowserRouter>
    )
}

export default App
