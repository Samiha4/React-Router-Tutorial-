import React from 'react'
import logo from '../assets/logo.png'
import { Link ,useNavigate} from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate();
  return (
    <div className='navbar'>
      <img src={logo} alt=""  width={'130px'}/>
      <ul >
       <Link to={'/'}><li>Home</li></Link> 
       <Link to={'/products'}><li>Products</li></Link>  
       <Link to={'/about'}><li>About</li></Link>  
       <Link to={'/contact'}><li>Contact</li></Link>   
       <Link to={'/jobs'}><li>Jobs</li></Link>  
      </ul>
      <button onClick={()=>{
        navigate('/contact' , {replace:true}) 
      }}>Get Started</button>
    </div>
  )
}

export default Navbar
