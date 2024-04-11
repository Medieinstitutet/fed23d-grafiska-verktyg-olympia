import HeaderImage from '../../assets/images/headerimage-tab-mob.jpg'
import HeaderImageDesktop from '../../assets/images/headerbread.jpg';
import Context from '../../context/Context'; 
import { useContext } from 'react';

const HeaderImageComponent = () => {
    const context = useContext(Context);
    if (!context) return; 

    const { isMobile } = context; 

    return (
        <div className="header-image-container">
            <img className="header-image" src={isMobile ? HeaderImage : HeaderImageDesktop} alt="Heading photo of sourdough bread" width="295" height="211" /> 
        </div>    
    );
  };
  
  export default HeaderImageComponent;