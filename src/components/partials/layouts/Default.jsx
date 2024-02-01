import PropTypes from 'prop-types'
import AlertMessage from '../AlertMessage/AlertMessage'

const Default = ({ children }) => {
    return (
        <div className="container-xxl">
            <AlertMessage/>
            {children}
        </div>
    )
}

Default.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Default
