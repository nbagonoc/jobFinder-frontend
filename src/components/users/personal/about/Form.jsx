import PropTypes from 'prop-types'

const Form = ({ formData, errors, onChange, onSubmit }) => {
    
    return (
        <form onSubmit={onSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='about' className='form-label'>
                            About
                        </label>
                        <textarea
                            type='text'
                            className='form-control'
                            id='about'
                            name='about'
                            placeholder='About'
                            rows='5'
                            value={formData && formData.about ? formData.about : ''}
                            onChange={onChange}
                        />
                        <span className='text-danger'>
                            {errors && errors.about ? errors.about : ''}
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