interface IHeadingProps {
  title: string;
  about?: boolean;
}

const Heading: React.FC<IHeadingProps> = ({ title, about }) => {
  return <h2 className={`large-heading ${about ? 'about-heading' : ''}`}>{title}</h2>;
};

export default Heading;
