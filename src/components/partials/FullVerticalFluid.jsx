import PropTypes from 'prop-types'

const FullVerticalFluid = ({ children }) => {
    return (
        <div className='d-flex flex-column min-vh-100 min-vw-100'>
            <div className='d-sm-flex flex-grow-1 justify-content-center align-items-center'>
                {children}
            </div>
        </div>
    )
}

FullVerticalFluid.propTypes = {
    children: PropTypes.node.isRequired,
}

export default FullVerticalFluid
