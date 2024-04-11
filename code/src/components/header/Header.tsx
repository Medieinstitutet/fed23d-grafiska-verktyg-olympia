import Logo from '../../assets/svg-icons/BreadLogo.svg'
import HeaderImage from '../../assets/images/headerbread.jpg'

const Header = () => {
  return (
    <header>
        <div>            
            <img className="logo" src={Logo} alt="Logo: All About Bread" width="507" height="130" />
        </div>
        <div>Här är en divider</div>
        <nav> 
            <h1>
                Recipes FAQ About Contact
            </h1>
        </nav>
        <div>Här är en divider</div>
        <img className="header-image" src={HeaderImage} alt="Heading photo of sourdough bread" width="798" height="305" /> 
        <div>Här är en divider</div>
    </header> 
    //Nav kommer in som separat komponent 
    //Divider kommer in som separat komponent
  )
}

export default Header