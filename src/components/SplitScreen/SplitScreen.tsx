import React from 'react';

import Container from './SplitScreen.styles';

import { SplitScreenProps } from '.';

const SplitScreen = (props: SplitScreenProps) => {
  const { children, leftWeight, rightWeight } = props;
  const [left, right] = children;

  return (
    <Container>
      <div style={{ flex: leftWeight }}>{left}</div>
      <div style={{ flex: rightWeight }}>{right}</div>
    </Container>
  );
};

export default SplitScreen;
