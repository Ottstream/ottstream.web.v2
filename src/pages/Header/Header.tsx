import ButtonIcon from '@/components/ButtonIcon/ButtonIcon';

import { PlusOutlined } from '@ant-design/icons';
import ronaldo from '@/assets/images/ronaldo.jpg';
import {
  BellTwoTone,
  MessageTwoTone,
  ThunderboltTwoTone,
} from '@ant-design/icons/lib/icons';
import { Input } from 'antd';
import {
  UserFullName,
  UserFullNameWrapper,
  UserImageWrapper,
  UserPosition,
  UserWrapper,
} from './Styled/Header.styled';
import OTTSButtonTypeTwo from './OTTSButtonTypeTwo/OTTSButtonTypeTwo';

const Header = () => {
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
        icon={<MessageTwoTone twoToneColor={'#165d9b'} />}
        onClick={() => {}}
        hasLeftBorder
        count={7}
      />
      <ButtonIcon
        type="text"
        icon={<ThunderboltTwoTone twoToneColor={'#165d9b'} />}
        onClick={() => {}}
        hasLeftBorder
      />
      <ButtonIcon
        type="text"
        icon={<BellTwoTone twoToneColor={'#165d9b'} />}
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
