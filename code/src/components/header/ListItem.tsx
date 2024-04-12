interface IProps {
    menuLink: string; 
    href: string; 
}

const ListItem: React.FC<IProps> = ({ menuLink, href }) => {

    return (  
        <li className="list-item"><a href={href} className="list-item-name">{menuLink}</a></li>
    )
}

export default ListItem; 