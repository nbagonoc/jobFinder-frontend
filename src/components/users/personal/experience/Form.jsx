import PropTypes from 'prop-types'

const Form = ({ formData, errors, onChange, onSubmit }) => {
    const formatDate = (date) => {
        if (date instanceof Date) {
            // Convert the date to a string in 'YYYY-MM-DD' format
            return date.toISOString().split('T')[0];
        }
        return ''; // Handle the case where date is not provided or not a Date object
    }
    
    return (
        <form onSubmit={onSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='title' className='form-label'>
                            Job Title
                        </label>
                        <input
                            type='text'
                            className='form-control'
                            id='title'
                            name='title'
                            value={formData && formData.title ? formData.title : ''}
                            onChange={onChange}
                        />
                        <span className='text-danger'>
                            {errors && errors.title ? errors.title : ''}
                        </span>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='company' className='form-label'>
                            Company
                        </label>
                        <input
                            type='text'
                            className='form-control'
                            id='company'
                            name='company'
                            value={formData && formData.company ? formData.company : ''}
                            onChange={onChange}
                        />
                        <span className='text-danger'>
                            {errors && errors.company ? errors.company : ''}
                        </span>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='from' className='form-label'>
                            From
                        </label>
                        <input
                            type='date'
                            className='form-control'
                            id='from'
                            name='from'
                            value={formData && formData.from ? formatDate(new Date(formData.from)) : ''}
                            onChange={onChange}
                        />
                        <span className='text-danger'>
                            {errors && errors.from ? errors.from : ''}
                        </span>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='to' className='form-label'>
                            To
                        </label>
                        <input
                            type='date'
                            className='form-control'
                            id='to'
                            name='to'
                            value={formData && formData.to ? formatDate(new Date(formData.to)) : ''}
                            onChange={onChange}
                            disabled={formData && formData.current ? true : false}
                        />
                        <span className='text-danger'>
                            {errors && errors.to ? errors.to : ''}
                        </span>
                    </div>
                    <div className='mb-3 '>
                        <label htmlFor='current' className='form-label me-2'>
                            Current
                        </label>
                        <input
                            type='checkbox'
                            className='form-check-input'
                            id='current'
                            name='current'
                            checked={formData && formData.current}
                            onChange={onChange}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='description' className='form-label'>
                            Description
                        </label>
                        <input
                            type='text'
                            className='form-control'
                            id='description'
                            name='description'
                            value={formData && formData.description ? formData.description : ''}
                            onChange={onChange}
                        />
                        <span className='text-danger'>
                            {errors && errors.description ? errors.description : ''}
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