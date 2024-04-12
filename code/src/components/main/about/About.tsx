import Heading from '../../shared/Heading';
import Paragraph from '../../shared/Paragraph';
import { v4 as uuidv4 } from 'uuid';
import { aboutParagraphs } from '../../../data/Texts';

const About = () => {
  return (
    <section className="about" id="about">
      <Heading title="About" />
      <div className="description">
        {aboutParagraphs.map(paragraph => {
          return <Paragraph key={uuidv4()} text={paragraph} />;
        })}
      </div>
    </section>
  );
};

export default About;
