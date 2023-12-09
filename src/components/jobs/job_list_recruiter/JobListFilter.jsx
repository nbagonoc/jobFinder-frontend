import { Link } from 'react-router-dom'

const JobListFilter = () => {
    return (
        <>
            <div className='card mb-3'>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-sm-6 col-lg-3 mb-3 mb-lg-0'>
                            <select
                                className='form-select'
                                aria-label='Sort by'
                            >
                                <option value=''>Sort by</option>
                                <option value=''>Latest</option>
                                <option value=''>Oldest</option>
                                <option value=''>Most applied</option>
                                <option value=''>Least applied</option>
                            </select>
                        </div>

                        <div className='col-sm-6 col-lg-3 mb-3 mb-lg-0'>
                            <select
                                className='form-select'
                                aria-label='Filter category'
                            >
                                <option value=''>Filter category</option>
                                <option value='Information and Technology'>
                                    Information and Technology
                                </option>
                                <option value='Business and Management'>
                                    Business and Management
                                </option>
                                <option value='Healthcare'>Healthcare</option>
                                <option value='Education'>Education</option>
                                <option value='Engineering'>Engineering</option>
                                <option value='Sales and Customer Service'>
                                    Sales and Customer Service
                                </option>
                                <option value='Creative Arts and Design'>
                                    Creative Arts and Design
                                </option>
                                <option value='Science and Research'>
                                    Science and Research
                                </option>
                                <option value='Hospitality and Tourism'>
                                    Hospitality and Tourism
                                </option>
                            </select>
                        </div>

                        <div className='col-sm-6 col-lg-3 mb-3 mb-sm-0'>
                            <button
                                className='btn btn-secondary w-100'
                            >
                                Reset filter
                            </button>
                        </div>

                        <div className='col-sm-6 col-lg-3'>
                            <Link
                                to='/jobs/create'
                                className='btn btn-success w-100'
                            >
                                Post a new job
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='d-none d-lg-block'>
                <div className='card mb-3'>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-lg-3'>
                                <h6 className='text-secondary mb-0'>Title</h6>
                            </div>
                            <div className='col-lg-3'>
                                <h6 className='text-secondary mb-0'>
                                    Position
                                </h6>
                            </div>
                            <div className='col-lg-2'>
                                <h6 className='text-secondary mb-0'>
                                    Category
                                </h6>
                            </div>
                            <div className='col-lg-1'>
                                <h6 className='text-secondary mb-0'>
                                    Applicants
                                </h6>
                            </div>
                            <div className='col-lg-3'>
                                <h6 className='text-secondary mb-0'>
                                    Actions
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JobListFilter
