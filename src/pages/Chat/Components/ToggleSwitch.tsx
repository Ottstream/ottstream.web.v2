import { Switch } from 'antd';
import styled from 'styled-components';

interface ToggleSwitchProps {
  onChange?: (checked: boolean) => void;
  defaultChecked?: boolean;
  beforeText?: string;
  afterText?: string;
}

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0 0 0;

  p {
    margin: 0 10px;
  }
`;

const ToggleSwitch = ({
  onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  },
  defaultChecked = false,
  beforeText,
  afterText,
}: ToggleSwitchProps) => {
  return (
    <ToggleWrapper>
      {beforeText && <p>{beforeText}</p>}
      <Switch defaultChecked={defaultChecked} onChange={onChange} />
      {afterText && <p>{afterText}</p>}
    </ToggleWrapper>
  );
};

export default ToggleSwitch;
