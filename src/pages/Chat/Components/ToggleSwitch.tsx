import { Switch } from 'antd';
import styled from 'styled-components';

interface ToggleSwitchProps {
  onChange?: (checked: boolean) => void;
  defaultChecked?: boolean;
}

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ToggleText = styled.p`
  margin: 0 10px;
`;
const ToggleSwitch = ({
  onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  },
  defaultChecked = true,
}: ToggleSwitchProps) => {
  return (
    <ToggleWrapper>
      <ToggleText>All</ToggleText>
      <Switch defaultChecked={defaultChecked} onChange={onChange} />
      <ToggleText>Unnoticed</ToggleText>
    </ToggleWrapper>
  );
};

export default ToggleSwitch;
