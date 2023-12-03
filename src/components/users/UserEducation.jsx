const UserEducation = () => {
    return (
        <div className='card'>
            <div className='card-header'>
                <h3 className='fw-bold fs-5 mt-2'>Education</h3>
            </div>
            <div className='card-body'>
                <div>
                    <h3 className='card-title fw-bold fs-6'>University Name</h3>
                    <h6 className='fw-bold'>
                        year:{' '}
                        <span className='text-muted fw-light'>1999-2003</span>
                    </h6>
                    <h6 className='fw-bold'>
                        Location:{' '}
                        <span className='text-muted fw-light'>Manila</span>
                    </h6>
                </div>
                <hr />
                <div>
                    <h3 className='card-title fw-bold fs-6'>University Name</h3>
                    <h6 className='fw-bold'>
                        year:{' '}
                        <span className='text-muted fw-light'>1999-2003</span>
                    </h6>
                    <h6 className='fw-bold'>
                        Location:{' '}
                        <span className='text-muted fw-light'>Manila</span>
                    </h6>
                </div>
            </div>
        </div>
    )
}

export default UserEducation
