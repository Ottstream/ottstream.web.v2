import TabBarWrapper from '@/pages/Chat/Components/TabBarWrapper';
import { LeftPanelWrapper } from '@/pages/Chat/Sections/LeftPanel/LeftPanel.styles';
import ConversationTypesSection from 'Pages/Chat/Components/ConversationTypesSection';
import OnlineUserSection from 'Pages/Chat/Components/OnlineUserSection';

const LeftPanel = () => {
  return (
    <LeftPanelWrapper>
      <ConversationTypesSection />
      <OnlineUserSection />
      <TabBarWrapper />
    </LeftPanelWrapper>
  );
};

export default LeftPanel;
