import { SplitScreenProps } from '.';
import Container from './SplitScreen.styles';

export const SplitScreen = (props: SplitScreenProps) => {
  const { children, leftWeight, rightWeight } = props;
  const [left, right] = children;

  return (
    <Container>
      <div style={{ flex: leftWeight }}>{left}</div>
      <div style={{ flex: rightWeight }}>{right}</div>
    </Container>
  );
};
