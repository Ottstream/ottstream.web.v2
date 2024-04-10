import React from 'react';

import { Layout } from 'antd';

import { ChatWrapper } from '@/pages/Chat/index.styles';
import LeftPanel from '@/pages/Chat/Sections/LeftPanel/LeftPanel';
import MainPanel from 'Pages/Chat/Sections/MainPanel/MainPanel';
import RightPanel from 'Pages/Chat/Sections/RightPanel/RightPanel';

const Chat = () => {
  return (
    <>
      <ChatWrapper>
        <Layout>
          <LeftPanel />
          <MainPanel />
          <RightPanel />
        </Layout>
      </ChatWrapper>
    </>
  );
};

export default Chat;
