import { Switch } from 'antd';
import styled from 'styled-components';

const ToggleWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const ToggleSection = () => {
  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };
  return (
    <ToggleWrapper>
      <div>
        <p>All</p>
      </div>
      <div style={{ margin: '0 10px' }}>
        <Switch defaultChecked onChange={onChange} />
      </div>
      <div>
        <p>Unnoticed</p>
      </div>
    </ToggleWrapper>
  );
};

export default ToggleSection;
