import './App.css'

import Login from './pages/auth/Login'
import Register from './pages/auth/Register'

import JobList from './pages/jobs/JobList'
import JobView from './pages/jobs/JobView'

import Home from './pages/Home'
import Create from './pages/Create'
import Edit from './pages/edit'
import Navigation from './components/partials/Navigation'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
    return (
        <BrowserRouter>
            <Navigation/>
            <div className="container mt-3">
                <Routes>
                    <Route path='/' element={<Home/>} />

                    <Route path='/login' element={<Login/>} />
                    <Route path='/register' element={<Register/>} />

                    <Route path='/jobs' element={<JobList/>} />
                    <Route path='/view/:_id' element={<JobView/>} />
                    <Route path='/create' element={<Create/>} />
                    <Route path='/edit/:_id' element={<Edit/>} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App