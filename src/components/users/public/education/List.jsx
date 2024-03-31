import PropTypes from 'prop-types'

import View from './View'

const List = ({ educations }) => {

    if (educations === null) {
        return <div>Loading...</div>
    }

    return (
        <div className='card'>
            <div className='card-header'>
                <h3 className='fw-bold fs-5 mt-2'>Education</h3>
            </div>
            <div className='card-body'>
            {educations.length === 0 && (
                    <div className='alert alert-info' role='alert'>
                        No education found
                    </div>
                )}
                {educations.map((education, index) => (
                    <div key={education._id}>
                        <View education={education} />
                        {index !== educations.length - 1 && <hr />}
                    </div>
                ))}
            </div>
        </div>
    )
}

List.propTypes = {
    educations: PropTypes.array.isRequired,
}

export default List
