import FullVerticalWithNav from '../partials/FullVerticalWithNav'

const HomeContainer = () => {
  return (
    <FullVerticalWithNav>
        <div className='my-3'>
            <h1 className='text-center fw-bold text-primary'>Find Your Dream Job Today</h1>
            <h3 className='text-center text-secondary'>
                We have a wide range of jobs available for you to apply here at JobFinder
            </h3>
            <div className="col-md-5 mx-auto mt-3">
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Find your dream job" aria-label="Search"/>
                    <button className="btn btn-success" type="submit">Find</button>
                </form>
            </div>
        </div>
    </FullVerticalWithNav>
  )
}

export default HomeContainer