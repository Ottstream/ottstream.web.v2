import { Layout } from 'antd';

import InfiniteList from 'Pages/Chat/Components/InfiniteList';
import SearchInput from 'Pages/Chat/Components/SearchInput';
import ToggleSwitch from 'Pages/Chat/Components/ToggleSwitch';

interface ConversationListPropsI {
  type: 'Clients' | 'Teams';
}

const ConversationList = ({ type }: ConversationListPropsI) => {
  return (
    <>
      <Layout
        style={{
          height: '100%',
          overflow: 'hidden',
        }}>
        <SearchInput placeholder="search" />
        <ToggleSwitch />
        <InfiniteList type={type} />
      </Layout>
    </>
  );
};

export default ConversationList;
