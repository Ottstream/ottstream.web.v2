import {
  OTTSBadge,
  OTTSIconButtonComponent,
  OTTSIconButtonWrapper,
} from './Styled/Button.styled';
import { IOTTSIconButtonProps } from './types';
const ButtonIcon = ({ count = 0, ...props }: IOTTSIconButtonProps) => {
  return (
    <OTTSIconButtonWrapper>
      <OTTSBadge color="#ffb800" count={count} offset={[-15, 15]}>
        <OTTSIconButtonComponent {...props}>
          {props.children}
        </OTTSIconButtonComponent>
      </OTTSBadge>
    </OTTSIconButtonWrapper>
  );
};

export default ButtonIcon;
