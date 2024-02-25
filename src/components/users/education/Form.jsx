import PropTypes from 'prop-types'

const Form = ({ formData, errors, onChange, onSubmit }) => {
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
                            value={formData && formData.from ? formData.from : ''}
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
                            value={formData && formData.to ? formData.to : ''}
                            onChange={onChange}
                        />
                        <span className='text-danger'>
                            {errors && errors.to ? errors.to : ''}
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