import Question from '../../shared/Question';
import Paragraph from '../../shared/Paragraph';

interface IQuestionContainerProps {
  text: string;
  question: string;
}

const QuestionContainer: React.FC<IQuestionContainerProps> = ({ text, question }) => {
  return (
    <div className="faq-panel">
      <Question question={question} />
      <Paragraph text={text} />
    </div>
  );
};

export default QuestionContainer;
