import React from 'react';
import '../scss/layouts/_recipes.scss';

interface PanelProps {
  height: string;
}

const Panel = ({ height }: PanelProps) => {
  return <div className="panel" style={{ height: height }}></div>;
};

export default Panel;
