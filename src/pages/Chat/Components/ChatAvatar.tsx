import React from 'react';

import { UserOutlined } from '@ant-design/icons';
import { Avatar as AntAvatar } from 'antd';
import { AvatarProps } from 'antd/lib/skeleton/Avatar';
import styled from 'styled-components';

import Icon from '@/components/Icon';
import ListMeta, { ListItem } from '@/components/InfiniteList/ListMeta';

interface ChatAvatarPropsI extends AvatarProps {
  type:
    | 'OnlyAvatar'
    | 'AvatarWithNameAtTheBottom'
    | 'AvatarWithNameOnTheRight'
    | 'AvatarWithNameOnTheRightAndSecondLine'
    | 'AvatarWithNameOnTheRightAndSecondLineWithRightInfo'
    | 'AvatarChatInfo';
  index: number;
  name?: string;
  status?: string;
  social?: string;
  unreadCount?: number;
}

const AvatarStyleComponent = styled(AntAvatar)`
  background-color: lightgray;
`;

const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 10px 0 0 0;

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    text-align: left;
  }
  .name {
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
    text-align: left;
  }
  .name-bottom {
    margin: 5px 0 0 0;
  }
`;

const AvatarWithNameAtTheBottomWrapper = styled(AvatarWrapper)`
  flex-direction: column;
`;
const AvatarChatInfoWrapper = styled(AvatarWrapper)`
  flex-direction: column;
  padding-top: 24px;
`;

const AvatarWithNameOnTheRightWrapper = styled(ListItem)<{
  $isUnread?: boolean;
  $noBorders?: boolean;
  $noBackground?: boolean;
}>`
  background-color: ${props =>
    props.$noBackground
      ? 'none'
      : props.$isUnread
        ? 'transparent'
        : props.theme.colorPalette.light1};

  border: ${props =>
    props.$noBorders
      ? 'none'
      : props.$isUnread
        ? '1px dashed #A5AAC6'
        : 'none'};

  ${AvatarStyleComponent} {
    margin: 8px 0;
  }
`;

const Avatar = ({ index, ...props }: ChatAvatarPropsI) => {
  return (
    <>
      <AvatarStyleComponent
        shape="circle"
        size={'large'}
        src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
        icon={<UserOutlined />}
        {...props}
      />
    </>
  );
};

const AvatarWithNameAtTheBottom = ({
  type,
  index,
  name,
  ...props
}: ChatAvatarPropsI) => {
  return (
    <AvatarWithNameAtTheBottomWrapper>
      <Avatar type={type} index={index} {...props} />
      <div className={'name-bottom'}>
        <p>{name}</p>
      </div>
    </AvatarWithNameAtTheBottomWrapper>
  );
};
const AvatarWithNameOnTheRight = ({
  type,
  index,
  ...props
}: ChatAvatarPropsI) => {
  return (
    <AvatarWithNameOnTheRightWrapper>
      <Avatar type={type} index={index} {...props} />
      <div className={'name-bottom'}>
        <p>Name</p>
      </div>
    </AvatarWithNameOnTheRightWrapper>
  );
};
const AvatarWithNameOnTheRightAndSecondLine = ({
  type,
  index,
  unreadCount,
  ...props
}: ChatAvatarPropsI) => {
  return (
    <AvatarWithNameOnTheRightWrapper $noBorders $noBackground>
      <div className="left-info">
        <Avatar type={type} index={index} {...props} />
        <ListMeta
          title={<p>{'Ani Hovhannisyan'}</p>}
          description={<p className="description">{'(415)282-1649'}</p>}
        />
      </div>
    </AvatarWithNameOnTheRightWrapper>
  );
};
const AvatarWithNameOnTheRightAndSecondLineWithRightInfo = ({
  type,
  index,
  name = '',
  social,
  unreadCount = 0,
  ...props
}: ChatAvatarPropsI) => {
  return (
    <AvatarWithNameOnTheRightWrapper $isUnread={!!unreadCount}>
      <div className="left-info">
        <Avatar type={type} index={index} {...props} />
        <ListMeta
          title={<p>{name}</p>}
          description={
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {social && <Icon name={social} size={14} />}
              <p className="description">{'description'}</p>
            </div>
          }
        />
      </div>
      <div className="right-info">
        <div className="timestamp">
          <p>{'12:57PM'}</p>
        </div>
        {unreadCount > 0 && (
          <div className="number-circle">
            <p>{unreadCount}</p>
          </div>
        )}
      </div>
    </AvatarWithNameOnTheRightWrapper>
  );
};

const AvatarChatInfo = ({ index, type, ...props }: ChatAvatarPropsI) => {
  return (
    <AvatarChatInfoWrapper>
      <Avatar index={index} type={type} size={56} {...props} />
      <p className="name">Lisa Price</p>
      <p>Company Info</p>
    </AvatarChatInfoWrapper>
  );
};

const ChatAvatar = ({ ...props }: ChatAvatarPropsI) => {
  const returnAvatar = () => {
    switch (props.type) {
      case 'OnlyAvatar':
        return <Avatar {...props} />;
      case 'AvatarWithNameAtTheBottom':
        return <AvatarWithNameAtTheBottom {...props} />;
      case 'AvatarWithNameOnTheRight':
        return <AvatarWithNameOnTheRight {...props} />;
      case 'AvatarWithNameOnTheRightAndSecondLine':
        return <AvatarWithNameOnTheRightAndSecondLine {...props} />;
      case 'AvatarWithNameOnTheRightAndSecondLineWithRightInfo':
        return (
          <AvatarWithNameOnTheRightAndSecondLineWithRightInfo {...props} />
        );
      case 'AvatarChatInfo':
        return <AvatarChatInfo {...props} />;
    }
  };

  return <>{returnAvatar()}</>;
};

export default ChatAvatar;
