const JobListFilter = () => {
    return (
        <div className='card'>
            <div className='card-body'>

                <select className='form-select mb-3' aria-label='Sort by'>
                    <option value=''>Sort by</option>
                    <option value=''>Latest</option>
                    <option value=''>Oldest</option>
                    <option value=''>Most applied</option>
                    <option value=''>Least applied</option>
                </select>

                <select
                    className='form-select mb-3'
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

                <select
                    className='form-select mb-3'
                    aria-label='Filter working arrangement'
                >
                    <option value=''>Filter working arrangement</option>
                    <option value='On-site'>On-site</option>
                    <option value='Remote'>Remote</option>
                    <option value='Hybrid'>Hybrid</option>
                </select>

                <select
                    className='form-select'
                    aria-label='Filter working type'
                >
                    <option value=''>Filter working type</option>
                    <option value='Full-time'>Full-time</option>
                    <option value='Part-time'>Part-time</option>
                </select>

            </div>
        </div>
    )
}

export default JobListFilter
