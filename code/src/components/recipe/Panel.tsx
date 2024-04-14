// import '../../scss/layouts/_recipeContainer.scss';

interface PanelProps {
  height: string;
}

const Panel = ({ height }: PanelProps) => {
  return <div className="panel" style={{ height }}></div>;
};

export default Panel;
