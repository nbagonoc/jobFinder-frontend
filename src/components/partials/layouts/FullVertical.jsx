import PropTypes from 'prop-types'
import AlertMessage from '../AlertMessage/AlertMessage'

const FullVertical = ({ children }) => {
    return (
        <div className='d-flex flex-column min-vh-100 min-vw-100'>
            <AlertMessage/>
            <div className='d-md-flex flex-grow-1 justify-content-center align-items-center'>
                <div className='container-xxl'>
                    {children}
                </div>
            </div>
        </div>
    )
}

FullVertical.propTypes = {
    children: PropTypes.node.isRequired,
}

export default FullVertical
