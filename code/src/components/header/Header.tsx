import LogoComponent from './Logo'
import Divider from '../shared/Divider'
import HeaderImageComponent from './HeaderImage'

const Header = () => {
  return (
    <header>
        <div>            
            <LogoComponent />
        </div>
        <div className="header-container">
          <Divider />
          <nav> 
              <h1 className="menu">
                  Recipes FAQ About Contact
              </h1>
          </nav>
          <Divider />
          <HeaderImageComponent />
          <Divider />
        </div>
    </header> 
    //Nav kommer in som separat komponent 
    //Divider kommer in som separat komponent

    //Ändra header image vid mindre än tablet
  )
}

export default Header