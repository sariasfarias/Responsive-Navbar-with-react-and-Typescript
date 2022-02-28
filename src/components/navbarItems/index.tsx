import megaphone from './navbar icons/megaphone.svg';
import bell from './navbar icons/bell.svg';
import bars from './navbar icons/bars.svg';
import SearchBox from '../searchBox';
import './navbarItems.css'

const NavbarItems = () => {
  return (
      <ul className="navbarItems-container">
        <li><SearchBox/> </li>
        <li><img className="items-img" src={megaphone} alt="megaphone"/></li>
        <li><img className="items-img" src={bell} alt="bell"/></li>
        <li><img className="items-img" src={bars} alt="bars"/></li>
      </ul>
  )
}
export default NavbarItems