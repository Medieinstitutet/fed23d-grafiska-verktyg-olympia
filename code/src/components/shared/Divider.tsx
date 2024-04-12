interface IDividerProps {
  responsiveness?: 'msl' | 'ssl';
  maxWidth?: string;
}

const Divider: React.FC<IDividerProps> = ({ responsiveness, maxWidth }) => {
  let dividerClass = 'divider';
  if (responsiveness === 'msl') {
    dividerClass = 'divider-msl';
  } else if (responsiveness === 'ssl') {
    dividerClass = 'divider-ssl';
  }

  const dividerWidth = {
    //maxWidth: maxWidth || '100%',
  };

  return <div className={`divider ${dividerClass}`} style={dividerWidth}></div>;
};

export default Divider;
