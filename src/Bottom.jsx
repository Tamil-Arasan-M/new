import React from 'react'
import { Link } from 'react-router-dom'

const Bottom = () => {
  return (
    <div className='bottom'>

       <div >
       <Link  to={"/"}>Home</Link>
       </div>
       <div>
       <Link to={"/menu"}>Menu</Link>
       </div>
        
       <div>
       <Link to={"/account"}>Account</Link>
       </div>
       <div>
       <Link to={"/cart"}>Cart</Link>
       </div>
       <div>
       <Link to={"/more"}>More</Link>
       </div>

    </div>
  )
}

export default Bottom