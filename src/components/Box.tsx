type Props = {
  children: React.ReactNode;
  borderWidth: string;
  borderColor: string;
  borderStyle: string;
  padding: string;
  margin: string;
};

const Box = ({
  children,
  borderWidth,
  borderColor,
  borderStyle,
  padding,
  margin,
}: Props) => {
  const boxStyle = {
    borderWidth,
    borderColor,
    borderStyle,
    padding,
    margin,
  };
  return <div style={boxStyle}>{children}</div>;
};

export default Box;
