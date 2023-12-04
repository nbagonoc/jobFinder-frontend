import PropTypes from 'prop-types'

const FullVertical = ({ children }) => {
    return (
        <div className='d-flex flex-column min-vh-100 min-vw-100'>
            <div className='d-md-flex flex-grow-1 justify-content-center align-items-center'>
                <div className='container-lg'>
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
