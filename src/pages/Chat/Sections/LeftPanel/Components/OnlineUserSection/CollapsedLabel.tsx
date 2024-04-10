import React from 'react';

import { Badge } from 'antd';
import styled from 'styled-components';

const CollapseLabelWrapper = styled.div<{ $applyPaddingAndMargin: boolean }>`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  padding: ${props =>
    props.$applyPaddingAndMargin ? '10px 15px 0 15px' : '0'};
  margin: ${props => (props.$applyPaddingAndMargin ? '0 0 10px 0' : '0')};
`;

interface CollapsedLabelPropsI {
  isVisible: boolean;
  applyPaddingAndMargin?: boolean;
  badgeColor: string;
  text: string;
}

const CollapsedLabel = ({
  isVisible,
  applyPaddingAndMargin = false,
  text,
  badgeColor,
}: CollapsedLabelPropsI) => {
  return (
    <>
      <CollapseLabelWrapper $applyPaddingAndMargin={applyPaddingAndMargin}>
        {isVisible && (
          <>
            <Badge offset={[-5, 0]} color={badgeColor} dot={true} />
            <p>{text}</p>
          </>
        )}
      </CollapseLabelWrapper>
    </>
  );
};

export default CollapsedLabel;
