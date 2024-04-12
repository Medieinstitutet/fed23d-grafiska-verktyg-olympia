import ListItem from "./ListItem";
const NavigationBar = () => {
    const menuLinks = ['Recipes', 'FAQ', 'About', 'Contact']

    return (
        <nav className="navigation-bar">
            <ul className="menu-list">
                {menuLinks.map((menuLink, index) => {
                    return <ListItem key={index} menuLink={menuLink} href={`#${menuLink.toLowerCase()}`}/> 
                })}
            </ul>
        </nav>
    );
};

export default NavigationBar; 