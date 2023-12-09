const UserApplicantColumnTitle = () => {
    return (
        <div className='d-none d-lg-block'>
            <div className='card mb-3'>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-lg-3'>
                            <h6 className='text-secondary mb-0'>Name</h6>
                        </div>
                        <div className='col-lg-3'>
                            <h6 className='text-secondary mb-0'>Email</h6>
                        </div>
                        <div className='col-lg-2'>
                            <h6 className='text-secondary mb-0'>Application Status</h6>
                        </div>
                        <div className='col-lg-4'>
                            <h6 className='text-secondary mb-0'>Actions</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserApplicantColumnTitle
