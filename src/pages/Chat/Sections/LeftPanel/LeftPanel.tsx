import TabBarWrapper from '@/pages/Chat/Components/TabBarWrapper.tsx';
import { LeftPanelWrapper } from '@/pages/Chat/Sections/LeftPanel/LeftPanel.styles.tsx';

const LeftPanel = () => {
  return (
    <LeftPanelWrapper>
      <p>Filter Conversation types section</p>
      <p>Online user section</p>
      <TabBarWrapper />
    </LeftPanelWrapper>
  );
};

export default LeftPanel;
