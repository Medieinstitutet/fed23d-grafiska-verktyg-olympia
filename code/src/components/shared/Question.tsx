interface IQuestionProp {
  question: string;
}

const Question: React.FC<IQuestionProp> = ({ question }) => {
  return <h2 className="question">{question}</h2>;
};

export default Question;
