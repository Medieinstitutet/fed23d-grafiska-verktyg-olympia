import LogoComponent from './Logo'
import HeaderImageComponent from './HeaderImage'

const Header = () => {
  return (
    <header>
        <div>            
            <LogoComponent />
        </div>
        <div>Här är en divider</div>
        <nav> 
            <h1>
                Recipes FAQ About Contact
            </h1>
        </nav>
        <div>Här är en divider</div>
        <HeaderImageComponent />
        <div>Här är en divider</div>
    </header> 
    //Nav kommer in som separat komponent 
    //Divider kommer in som separat komponent
  )
}

export default Header