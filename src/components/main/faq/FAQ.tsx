import Heading from '../../shared/Heading';
import { questionsAndAnswers } from '../../../data/Texts';
import QuestionContainer from './QuestionContainer';
import { v4 as uuidv4 } from 'uuid';
import Quote from '../../shared/Quote';
import SubscriptionInput from './hooks/SubscriptionInput';

const FAQ = () => {
  return (
    <section className="faq-container" id="faq">
      <Quote />
      <SubscriptionInput />
      <Heading title="FAQ" />
      <div className="faq-wrapper">
        {questionsAndAnswers.map(faq => {
          const { answer, question } = faq;
          return <QuestionContainer key={uuidv4()} text={answer} question={question} />;
        })}
      </div>
    </section>
  );
};

export default FAQ;
