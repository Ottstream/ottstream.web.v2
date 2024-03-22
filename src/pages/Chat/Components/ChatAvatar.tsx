import React from 'react';

import { UserOutlined } from '@ant-design/icons';
import { Avatar as AntAvatar, List } from 'antd';
import styled from 'styled-components';

interface ChatAvatarPropsI {
  type:
    | 'OnlyAvatar'
    | 'AvatarWithNameAtTheBottom'
    | 'AvatarWithNameOnTheRight'
    | 'AvatarWithNameOnTheRightAndSecondLine'
    | 'AvatarWithNameOnTheRightAndSecondLineWithRightInfo';
  index: number;
}

const AvatarStyleComponent = styled(AntAvatar)`
  background-color: lightgray;
`;
const AvatarWithNameAtTheBottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 10px 0 0 0;
`;

const AvatarWithNameOnTheRightWrapper = styled(List.Item)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  background-color: ${props => props.theme.colorPalette.light1};
  border-radius: 6px;
  //border: 1px solid gold;

  ${AvatarStyleComponent} {
    margin: 8px 0;
  }

  .ant-list-item-meta,
  .ant-list-item-meta-content {
    margin-left: 5px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
    //background-color: red;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    text-align: left;
  }
  .right-info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
    height: 100%;
    margin: 0 8px 0 8px;
  }
  .timestamp {
    font-size: 12px;
    color: #999;
  }
  .number-circle {
    width: 18px;
    height: 18px;
    border-radius: 18px;
    background-color: #ffb800;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 4px 0 4px;
    p {
      font-weight: 400;
      font-size: 12px;
    }
  }
`;

const Avatar = ({ index }: ChatAvatarPropsI) => {
  return (
    <>
      <AvatarStyleComponent
        shape="circle"
        size={'large'}
        src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
        icon={<UserOutlined />}
      />
    </>
  );
};

const AvatarWithNameAtTheBottom = ({ type, index }: ChatAvatarPropsI) => {
  return (
    <AvatarWithNameAtTheBottomWrapper>
      <Avatar type={type} index={index} />
      <div style={{ marginTop: '5px' }}>
        <p>Name</p>
      </div>
    </AvatarWithNameAtTheBottomWrapper>
  );
};
const AvatarWithNameOnTheRight = ({ type, index }: ChatAvatarPropsI) => {
  return (
    <AvatarWithNameOnTheRightWrapper>
      <Avatar type={type} index={index} />
      <div style={{ marginLeft: '5px' }}>
        <p>Name</p>
      </div>
    </AvatarWithNameOnTheRightWrapper>
  );
};
const AvatarWithNameOnTheRightAndSecondLine = ({
  type,
  index,
}: ChatAvatarPropsI) => {
  return (
    <AvatarWithNameOnTheRightWrapper>
      <Avatar type={type} index={index} />
      <List.Item.Meta
        title={<p>{'Ani Hovhannisyan'}</p>}
        description={<p>{'Ant Design'}</p>}
      />
    </AvatarWithNameOnTheRightWrapper>
  );
};
const AvatarWithNameOnTheRightAndSecondLineWithRightInfo = ({
  type,
  index,
}: ChatAvatarPropsI) => {
  return (
    <AvatarWithNameOnTheRightWrapper>
      <Avatar type={type} index={index} />
      <List.Item.Meta
        title={<p>{'Ani Hovhannisyan'}</p>}
        description={<p>{'Ant Design'}</p>}
      />
      <div className="right-info">
        <div className="timestamp">
          <p>{'12:57PM'}</p>
        </div>
        <div className="number-circle">
          <p>{4}</p>
        </div>
      </div>
    </AvatarWithNameOnTheRightWrapper>
  );
};

const ChatAvatar = ({ type, index }: ChatAvatarPropsI) => {
  const returnAvatar = () => {
    switch (type) {
      case 'OnlyAvatar':
        return <Avatar index={index} type={type} />;
      case 'AvatarWithNameAtTheBottom':
        return <AvatarWithNameAtTheBottom index={index} type={type} />;
      case 'AvatarWithNameOnTheRight':
        return <AvatarWithNameOnTheRight index={index} type={type} />;
      case 'AvatarWithNameOnTheRightAndSecondLine':
        return (
          <AvatarWithNameOnTheRightAndSecondLine index={index} type={type} />
        );
      case 'AvatarWithNameOnTheRightAndSecondLineWithRightInfo':
        return (
          <AvatarWithNameOnTheRightAndSecondLineWithRightInfo
            index={index}
            type={type}
          />
        );
    }
  };

  return <>{returnAvatar()}</>;
};

export default ChatAvatar;
