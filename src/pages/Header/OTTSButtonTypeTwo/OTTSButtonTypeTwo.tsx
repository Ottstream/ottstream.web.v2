import { IOTTSButtonProps } from '@/components/ButtonIcon/types';
import { OTTSButtonTypeTwoComponent } from '../Styled/Header.styled';

const OTTSButtonTypeTwo = ({ ...props }: IOTTSButtonProps) => {
  return (
    <>
      <OTTSButtonTypeTwoComponent {...props}>
        {props.children}
      </OTTSButtonTypeTwoComponent>
    </>
  );
};

export default OTTSButtonTypeTwo;
