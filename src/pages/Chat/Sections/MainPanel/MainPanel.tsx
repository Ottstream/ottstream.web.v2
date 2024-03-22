import React from 'react';

import { Input, Layout } from 'antd';

import { MainPanelWrapper } from '@/pages/Chat/Sections/MainPanel/MainPanel.styles';
import MainPanelFooter from 'Pages/Chat/Components/MainPanelFooter';
import MainPanelHeader from 'Pages/Chat/Components/MainPanelHeader';
// eslint-disable-next-line import/named
import Messenger, { MessageI } from 'Pages/Chat/Components/Messenger';

const { Header, Content } = Layout;
const { Search } = Input;

const testData: MessageI[] = [
  {
    id: 10,
    text: 'Have you come?',
    sender: {
      id: 1,
      name: 'Justin',
      avatarUrl: 'other_person_avatar_url',
    },
  },
  {
    id: 9,
    text: 'Cant wait.',
    sender: {
      id: 1,
      name: 'Loya',
      avatarUrl: 'other_person_avatar_url',
    },
  },
  {
    id: 8,
    text: 'Good good. See you there ! ',
    sender: {
      id: 2,
      name: 'Loya',
      avatarUrl: 'other_person_avatar_url',
    },
  },
  {
    id: 7,
    text: 'Yeah sure !',
    sender: {
      id: 1,
      name: 'Justin',
      avatarUrl: 'other_person_avatar_url',
    },
  },
  {
    id: 6,
    text: 'Me too. Are you coming to the event tonight?',
    sender: {
      id: 2,
      name: 'Loya',
      avatarUrl: 'other_person_avatar_url',
    },
  },
  {
    id: 5,
    text: 'All good, you?',
    sender: {
      id: 1,
      name: 'Justin',
      avatarUrl: 'other_person_avatar_url',
    },
  },
  {
    id: 4,
    text: 'Hi.',
    sender: {
      id: 1,
      name: 'Justin',
      avatarUrl: 'other_person_avatar_url',
    },
  },
  {
    id: 3,
    text: 'Whats up?',
    sender: {
      id: 2,
      name: 'Loya',
      avatarUrl: 'other_person_avatar_url',
    },
  },
  {
    id: 2,
    text: 'Hello! How are you?',
    sender: {
      id: 2,
      name: 'Loya',
      avatarUrl: 'other_person_avatar_url',
    },
  },
  {
    id: 1,
    text: 'Hi there!',
    sender: {
      id: 1,
      name: 'Justin',
      avatarUrl: 'your_avatar_url',
    },
  },
];

const MainPanel = () => {
  return (
    <MainPanelWrapper>
      <MainPanelHeader />
      <Layout>
        <Header style={{ background: '#F8F8FA', padding: '0 16px', border: 0 }}>
          <Search
            placeholder="Search messages"
            style={{
              width: '100%',
              margin: '8px 0',
            }}
          />
        </Header>
        <Content style={{ padding: '0 8px ' }}>
          <Messenger messages={testData} />
        </Content>
      </Layout>
      <MainPanelFooter />
    </MainPanelWrapper>
  );
};

export default MainPanel;
