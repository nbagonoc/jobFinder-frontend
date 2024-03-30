import PropTypes from 'prop-types'

import View from './View'

const List = ({ experiences }) => {

    if (experiences === null) {
        return <div>Loading...</div>
    }

    return (
        <div className='card'>
            <div className='card-header'>
                <h3 className='fw-bold fs-5 mt-2'>Experience</h3>
            </div>
            <div className='card-body'>
                {experiences.length === 0 && (
                    <div className='alert alert-info' role='alert'>
                        No experience found
                    </div>
                )}
                {experiences.map((experience, index) => (
                    <div key={experience._id}>
                        <View experience={experience} />
                        {index !== experiences.length - 1 && <hr />}
                    </div>
                ))}
            </div>
        </div>
    )
}

List.propTypes = {
    experiences: PropTypes.array.isRequired,
}

export default List
