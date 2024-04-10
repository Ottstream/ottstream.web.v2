import { PlusOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { useNavigate } from 'react-router-dom';

import ronaldo from '@/assets/images/ronaldo.jpg';
import ButtonIcon from '@/components/ButtonIcon/ButtonIcon';
import Icon from '@/components/Icon';

import OTTSButtonTypeTwo from './OTTSButtonTypeTwo/OTTSButtonTypeTwo';
import {
  UserFullName,
  UserFullNameWrapper,
  UserImageWrapper,
  UserPosition,
  UserWrapper,
} from './Styled/Header.styled';

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <OTTSButtonTypeTwo
        type={'text'}
        icon={<PlusOutlined />}
        onClick={() => {}}>
        <p>Add Client</p>
      </OTTSButtonTypeTwo>
      <Input style={{ margin: '10px' }} placeholder="Search" />

      <ButtonIcon
        type="text"
        icon={<Icon name="chat" size={22} />}
        onClick={() => {
          navigate('/chat/');
        }}
        hasLeftBorder
        count={7}
      />

      <ButtonIcon
        type="text"
        icon={<Icon name="sound" size={22} />}
        onClick={() => {}}
        hasLeftBorder
      />

      <ButtonIcon
        type="text"
        icon={<Icon name="bellHeader" size={22} />}
        onClick={() => {}}
        hasLeftBorder
        hasRightBorder
        count={2}
      />
      <UserWrapper>
        <UserFullNameWrapper>
          <UserFullName>Cristiano Ronaldo</UserFullName>
          <UserPosition> Forward</UserPosition>
        </UserFullNameWrapper>

        <UserImageWrapper src={ronaldo} alt="image" />
      </UserWrapper>
    </>
  );
};

export default Header;
