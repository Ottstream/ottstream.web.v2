import { Switch } from 'antd';
import styled from 'styled-components';

interface ToggleSwitchProps {
  onChange?: (checked: boolean) => void;
  defaultChecked?: boolean;
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
  defaultChecked = true,
}: ToggleSwitchProps) => {
  return (
    <ToggleWrapper>
      <p>All</p>
      <Switch defaultChecked={defaultChecked} onChange={onChange} />
      <p>Unnoticed</p>
    </ToggleWrapper>
  );
};

export default ToggleSwitch;
