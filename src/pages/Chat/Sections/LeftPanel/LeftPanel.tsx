import TabBarWrapper from '@/pages/Chat/Components/TabBarWrapper';
import { LeftPanelWrapper } from '@/pages/Chat/Sections/LeftPanel/LeftPanel.styles';

const LeftPanel = () => {
  return (
    <LeftPanelWrapper>
      <div>
        <p>Filter Conversation types section</p>
      </div>
      <div>
        <p>Online user section</p>
      </div>
      <TabBarWrapper />
    </LeftPanelWrapper>
  );
};

export default LeftPanel;
