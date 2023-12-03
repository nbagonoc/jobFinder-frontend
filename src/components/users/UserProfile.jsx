const UserProfile = () => {
  return (
    <div className='card'>
      <div className='card-body'>
        <h1 className='card-title fw-bold text-primary fs-4'>User Name</h1>
        <h6 className='fw-bold'>
            Phone: <span className='text-muted fw-light'>Phone</span>
        </h6>
        <h6 className='fw-bold'>
            Email: <span className='text-muted fw-light'>Email</span>
        </h6>
        <h6 className='fw-bold'>
            Location: <span className='text-muted fw-light'>Location</span>
        </h6>
      </div>
    </div>
  )
}

export default UserProfile