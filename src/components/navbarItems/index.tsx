import items from './constants';
import './navbarItems.css'

const NavbarItems = () => {

  const ListItems = items.map((item) =><li>{item}</li>);

  return (
      <ul className="navbarItems-container">
        {ListItems}
      </ul>
  )
}
export default NavbarItems