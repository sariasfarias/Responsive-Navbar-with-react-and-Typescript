import React, {useState, useEffect} from 'react';
import logo from './logo icons/CM_logo.svg';
import mobileLogo from './logo icons/CM_mobile_logo.svg';
import './logo.css';

const Logo = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth)
    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])

  const logoToRender = () => {
    const isMobile = screenWidth < 500;

    if(isMobile){
      return <img src={mobileLogo} className="logo-img" alt="logo" />;
    }
    return <img src={logo} className="logo-img" alt="logo" />
  }

  return (
    <div className="logo-container">
      {logoToRender()}
    </div>
  )
}
export default Logo