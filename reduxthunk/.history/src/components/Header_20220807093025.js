import React,{Fragment} from 'react'
import {useSelector,useDispatch} from 'react-redux'
const Header = () => {
    const dispatch=useDispatch()
    const {error}=useSelector((state)=>state.books);
    const {logg}
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
    </nav>


    </Fragment>
  )
}

export default Header