import LogoComponent from './Logo'
import HeaderImageComponent from './HeaderImage'

const Header = () => {
  return (
    <header>
        <div>            
            <LogoComponent />
        </div>
        <div className="test-divider"></div>
        <nav> 
            <h1 className="menu">
                Recipes FAQ About Contact
            </h1>
        </nav>
        <div className="test-divider"></div>
        <HeaderImageComponent />
        <div className="test-divider"></div>
    </header> 
    //Nav kommer in som separat komponent 
    //Divider kommer in som separat komponent

    //Ändra header image vid mindre än tablet
  )
}

export default Header