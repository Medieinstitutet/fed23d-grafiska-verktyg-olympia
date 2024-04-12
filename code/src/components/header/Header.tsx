import LogoComponent from './Logo'
import Divider from '../shared/Divider'
import NavigationBar from './Navbar'
import HeaderImageComponent from './HeaderImage'

const Header = () => {
  return (
    <header>
        <div>            
            <LogoComponent />
        </div>
        <div className="header-container">
          <Divider />
          <NavigationBar />
          <Divider />
          <HeaderImageComponent />
          <Divider />
        </div>
    </header> 
  )
}

export default Header