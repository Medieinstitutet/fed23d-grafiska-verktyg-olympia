import HeaderImage from '../../assets/images/headerimage-tab-mob.webp'
import HeaderImageDesktop from '../../assets/images/headerbread.webp';
import Context from '../../context/Context'; 
import { useContext } from 'react';

const HeaderImageComponent = () => {
    const context = useContext(Context);
    if (!context) return; 

    const { isDesktop } = context; 

    return (
        <div className="header-image-container">
            <img className="header-image" src={isDesktop ?  HeaderImageDesktop : HeaderImage} alt="Heading photo of sourdough bread" width="295" height="211" /> 
        </div>    
    );
  };
  
  export default HeaderImageComponent;