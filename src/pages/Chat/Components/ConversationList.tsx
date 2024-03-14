import InfiniteList from 'Pages/Chat/Components/InfiniteList';
import SearchInput from 'Pages/Chat/Components/SearchInput';
import ToggleSwitch from 'Pages/Chat/Components/ToggleSwitch';

interface ConversationListPropsI {
  type: 'Clients' | 'Teams';
}

const ConversationList = ({ type }: ConversationListPropsI) => {
  return (
    <div>
      <SearchInput placeholder="search" />
      <ToggleSwitch />
      <InfiniteList type={type} />
    </div>
  );
};

export default ConversationList;
