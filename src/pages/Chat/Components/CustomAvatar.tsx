import { Avatar } from 'antd';
import styled from 'styled-components';

const StyledAvatar = styled(Avatar)`
  margin-right: 10px;
  background-color: lightgray;
`;

const CustomAvatar = ({ index }: { index: number }) => {
  return (
    <StyledAvatar
      src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
    />
  );
};

export default CustomAvatar;
