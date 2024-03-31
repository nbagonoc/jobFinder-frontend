import PropTypes from 'prop-types'

import View from './View'

const List = ({ skills }) => {

    if (skills === null) {
        return <div>Loading...</div>
    }

    return (
        <div className='card'>
            <div className='card-header'>
                <h3 className='fw-bold fs-5 mt-2'>Skills</h3>
            </div>
            <div className='card-body'>
                {skills.length === 0 && (
                    <div className='alert alert-info' role='alert'>
                        No skill found
                    </div>
                )}
                {skills.map((skill, index) => (
                    <div key={skill._id}>
                        <View skill={skill} />
                        {index !== skills.length - 1 && <hr />}
                    </div>
                ))}
            </div>
        </div>
    )
}

List.propTypes = {
    skills: PropTypes.array.isRequired,
}

export default List
