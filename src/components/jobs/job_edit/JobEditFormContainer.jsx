import { Link } from 'react-router-dom'
import JobEditForm from './JobEditForm'

const JobEditFormContainer = () => {

  return (
    <div className='card'>
        <div className='card-header'>
            <div className='row'>
                <div className='col-6'>
                    <h3 className='mb-0'>Edit Job</h3>
                </div>
                <div className='col-6'>
                    <Link to='/' className='btn btn-secondary float-end'>Cancel</Link>
                </div>
            </div>
        </div>
        <div className='card-body'>
            <JobEditForm />
        </div>
    </div>
  )
}

export default JobEditFormContainer