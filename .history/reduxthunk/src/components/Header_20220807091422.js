import React,{Fragment} from 'react'
import {useSelector,useDispatch} from 'react-redux'
const Header = () => {
    const dispatch=useDispatch()
    const {error}=useSelector((state)=>state.books);
    return (
    <Fragment>
    {
        error&&
        <div class>
        </div>
    }


    </Fragment>
  )
}

export default Header