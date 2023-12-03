const CompanyAboutDetails = () => {
  return (
    <div className='card'>
        <div className='card-header'>
            <h3 className='fw-bold fs-5 mt-2'>About the company</h3>
        </div>
        <div className='card-body'>
            <h3 className='card-title fw-bold text-primary fs-6'>Company XYZ</h3>
            <h6 className='fw-bold'>
                Industry: <span className='text-muted fw-light'>Information technology</span>
            </h6>
            <h6 className='fw-bold'>
                Size: <span className='text-muted fw-light'>50</span>
            </h6>
            <h6 className='fw-bold'>
                Location: <span className='text-muted fw-light'>Manila</span>
            </h6>
            <h6 className='fw-bold'>
                Website: <span className='text-muted fw-light'>company-xyz.com</span>
            </h6>
            <p className='text-muted fw-light'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sit iusto recusandae cum a ipsa, eligendi iste laboriosam praesentium fugiat quaerat, libero unde, eveniet ab accusamus voluptates. Nam, quis itaque!
            </p>
        </div>
    </div>
  )
}

export default CompanyAboutDetails