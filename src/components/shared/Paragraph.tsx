interface IParagraphProps {
  text: string;
}

const Paragraph: React.FC<IParagraphProps> = ({ text }) => {
  return <p className="paragraph">{text}</p>;
};

export default Paragraph;
