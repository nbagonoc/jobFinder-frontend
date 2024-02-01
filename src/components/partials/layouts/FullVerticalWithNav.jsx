import PropTypes from 'prop-types'
import AlertMessage from '../AlertMessage/AlertMessage'

const FullVerticalWithNav = ({ children }) => {
    return (
        <div className='d-flex flex-column min-vh-100 min-vw-100 full-vertical'>
            <div className='d-flex flex-grow-1 justify-content-center align-items-center'>
                <div className="container-xxl">
                    <AlertMessage/>
                    {children}
                </div>
            </div>
        </div>
    )
}

FullVerticalWithNav.propTypes = {
    children: PropTypes.node.isRequired,
}

export default FullVerticalWithNav
