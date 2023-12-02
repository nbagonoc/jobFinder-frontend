import FullVerticalWithNav from '../partials/FullVerticalWithNav'

const HomeContainer = () => {
  return (
    <FullVerticalWithNav>
        <div className=''>
            <div className="col-md-8 mx-auto mt-3">
                <h1 className='text-center fw-bold fs-2 text-primary'>Find Your Dream Job Today</h1>
                <h3 className='text-center fw-light fs-4 text-secondary'>
                    We have a wide range of jobs available for you to apply here at JobFinder
                </h3>
            </div>
            <div className="col-sm-8 col-md-5 mx-auto mt-3">
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Find your dream job" aria-label="Search"/>
                    <button className="btn btn-success">Find</button>
                </form>
            </div>
        </div>
    </FullVerticalWithNav>
  )
}

export default HomeContainer