import React, { useState } from 'react';

import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import styled from 'styled-components';

import AvatarRow from 'Pages/Chat/Components/AvatarRow';

const users = [
  { name: 'User 1', imageUrl: 'avatar1.jpg' },
  { name: 'User 2', imageUrl: 'avatar2.jpg' },
  { name: 'User 3', imageUrl: 'avatar3.jpg' },
  { name: 'User 4', imageUrl: 'avatar4.jpg' },
  // Add more users as needed
];

const OnlineUserSection: React.FC = () => {
  const [isFirstRowVisible, setIsFirstRowVisible] = useState(true);

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: 'Users Online',
      children: (
        <CollapseChild>
          <AvatarRow users={users} />
          <AvatarRow users={users} />
          <AvatarRow users={users} />
          <AvatarRow users={users} />
          <AvatarRow users={users} />
          <AvatarRow users={users} />
          <AvatarRow users={users} />
          <AvatarRow users={users} />
          <AvatarRow users={users} />
          <AvatarRow users={users} />
          <AvatarRow users={users} />
          <AvatarRow users={users} />
          <AvatarRow users={users} />
        </CollapseChild>
      ),
      extra: <p>All Users</p>,
    },
  ];
  // const onChange = () => {
  //   setIsFirstRowVisible(!isFirstRowVisible);
  // };

  return (
    <>
      <CustomCollapse
        expandIconPosition={'end'}
        ghost
        // onChange={onChange}
        items={items}
      />
      {/*{isFirstRowVisible && <AvatarRow users={users} />}*/}
      <AvatarRow users={users} />
    </>
  );
};

const CustomCollapse = styled(Collapse)`
  .ant-collapse-content-box {
    padding-block: 0 !important;
  }
`;

const CollapseChild = styled.div`
  position: absolute;
  width: 100%;
  height: calc(100% - 110px);
  left: 0;
  overflow: auto;
  z-index: 10;
  padding: 5px;
  background-color: #dee6ec;
`;
export default OnlineUserSection;
