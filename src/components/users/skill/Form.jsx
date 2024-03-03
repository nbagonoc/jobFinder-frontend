import PropTypes from 'prop-types'

const Form = ({ formData, errors, onChange, onSubmit }) => {
    
    return (
        <form onSubmit={onSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='skill' className='form-label'>
                            Skill
                        </label>
                        <input
                            type='text'
                            className='form-control'
                            id='skill'
                            name='skill'
                            value={formData && formData.skill ? formData.skill : ''}
                            onChange={onChange}
                        />
                        <span className='text-danger'>
                            {errors && errors.skill ? errors.skill : ''}
                        </span>
                    </div>
                </form>
    )
}

Form.propTypes = {
    formData: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
}

export default Form