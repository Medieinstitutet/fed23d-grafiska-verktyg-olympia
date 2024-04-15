interface IHeadingProps {
  title: string;
}

const Heading: React.FC<IHeadingProps> = ({ title }) => {
  return <h2 className="large-heading">{title}</h2>;
};

export default Heading;
