import PropTypes from 'prop-types'

const Form = ({ formData, errors, onChange, onSubmit }) => {
    
    return (
        <form onSubmit={onSubmit}>
            <div className='mb-3'>
                <label htmlFor='firstName' className='form-label'>
                    First Name
                </label>
                <input
                    type='text'
                    className='form-control'
                    id='firstName'
                    name='firstName'
                    value={formData && formData.firstName ? formData.firstName : ''}
                    onChange={onChange}
                />
                <span className='text-danger'>
                    {errors && errors.firstName ? errors.firstName : ''}
                </span>
            </div>
            <div className='mb-3'>
                <label htmlFor='lastName' className='form-label'>
                    Last Name
                </label>
                <input
                    type='text'
                    className='form-control'
                    id='lastName'
                    name='lastName'
                    value={formData.lastName}
                    onChange={onChange}
                />
                <span className='text-danger'>
                    {errors && errors.lastName ? errors.lastName : ''}
                </span>
            </div>
            <div className='mb-3'>
                <label htmlFor='email' className='form-label'>
                    Phone
                </label>
                <input
                    type='text'
                    className='form-control'
                    id='phone'
                    name='phone'
                    value={formData.phone}
                    onChange={onChange}
                />
                <span className='text-danger'>
                    {errors && errors.phone ? errors.phone : ''}
                </span>
            </div>
            <div className='mb-3'>
                <label htmlFor='photo' className='form-label'>
                    Photo
                </label>
                <input
                    type='file'
                    className='form-control'
                    id='photo'
                    name='photo'
                    onChange={onChange}
                />
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