import propTypes from 'prop-types'

function UserGretting(props){

    const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>
    const logInPrompt = <h2 className="login-prompt">Please log in to continue</h2>

    return(props.isLoggedIn ?   welcomeMessage : logInPrompt)
}

UserGretting.propTypes = {
    isLoggedIn : propTypes.bool,
    username : propTypes.string
}

UserGretting.defaultProps = {
    isLoggedIn : false,
    username : "Guest"
}
export default UserGretting