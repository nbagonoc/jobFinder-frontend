const JobListColumnTitle = () => {
  return (
    <div className='d-none d-lg-block'>
                <div className='card mb-3 mb-lg-1'>
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
  )
}

export default JobListColumnTitle