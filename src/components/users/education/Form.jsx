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
                        <label htmlFor='school' className='form-label'>
                            School
                        </label>
                        <input
                            type='text'
                            className='form-control'
                            id='school'
                            name='school'
                            value={formData && formData.school ? formData.school : ''}
                            onChange={onChange}
                        />
                        <span className='text-danger'>
                            {errors && errors.school ? errors.school : ''}
                        </span>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='degree' className='form-label'>
                            Degree
                        </label>
                        <input
                            type='text'
                            className='form-control'
                            id='degree'
                            name='degree'
                            value={formData && formData.degree ? formData.degree : ''}
                            onChange={onChange}
                        />
                        <span className='text-danger'>
                            {errors && errors.degree ? errors.degree : ''}
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
                            // value={formData && formData.from ? formData.from : ''}
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
                            // value={formData && formData.to ? formData.to : ''}
                            value={formData && formData.to ? formatDate(new Date(formData.to)) : ''}
                            onChange={onChange}
                            disabled={formData && formData.current ? true : false}
                        />
                        <span className='text-danger'>
                            {errors && errors.to ? errors.to : ''}
                        </span>
                    </div>
                    {/* <div className='mb-3 '>
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
                    </div> */}
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