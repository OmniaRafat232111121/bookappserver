import React,{Fragment} from 'react'

const Header = () => {
  
    return (
    <Fragment>
    {
        error&&(
        <div className="alert aler-danger mb-0" role="alert">
          {error}
        </div>
    )}
    <nav className="navbar navbar-dark bg-dark">
    <span className="navbar-brad mb-0 h1">My Books</span>
    <button
    cassName="btn btn-outline-primary"
    type="submit"
    onClick={()=> dispatch(authHandler())}>

    </button>
    {loggedIn ? 'Log Out' : 'Log In'}
    </nav>


    </Fragment>
  )
}

export default Header