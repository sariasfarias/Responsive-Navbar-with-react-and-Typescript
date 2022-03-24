import { useNavigate } from 'react-router-dom';
import megaphone from './navbar icons/megaphone.svg';
import bell from './navbar icons/bell.svg';
import bars from './navbar icons/bars.svg';
import SearchBox from '../searchBox';

const Redirect = (url:string)  => {
    const navigate = useNavigate(); 
    navigate(url);
  }
  
  const buttonImage = (logo: string, url: string) => {
    return (<button onClick={() => Redirect(url)}><img className="items-img" src={logo} alt={logo}/></button>)
  }
  
  const items = [
    <SearchBox/>,
    buttonImage(megaphone, "#"),
    buttonImage(bell, "#"),
    buttonImage(bars, "#"),
  ]
  
export default items;