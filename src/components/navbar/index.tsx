import Logo from '../logo'
import NavbarItems from '../navbarItems'
import './navbar.css';


const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="block"> <Logo/> </div>
        <div className="block"><NavbarItems/></div>
      </div>
      
    </nav>
  )
}
export default Navbar
