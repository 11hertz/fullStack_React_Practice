import { memo } from 'react';

type Prop = {
  title: string;
  children: string;
  color: string;
};

const Title = ({ title, children, color }: Prop) => {
  const titleColor = { color };
  console.log('title');
  return (
    <>
      <h2 style={titleColor}>{title}</h2>
      <strong>{children}</strong>
    </>
  );
};

export default memo(Title);
