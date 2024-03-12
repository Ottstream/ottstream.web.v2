import { ChatWrapper } from '@/pages/Chat/index.styles';
import LeftPanel from '@/pages/Chat/Sections/LeftPanel/LeftPanel';
import MainPanel from '@/pages/Chat/Sections/MainPanel/MainPanel.tsx';
import RightPanel from '@/pages/Chat/Sections/RightPanel/RightPanel.tsx';

const Chat = () => {
  return (
    <>
      <ChatWrapper>
        <LeftPanel />
        <MainPanel />
        <RightPanel />
      </ChatWrapper>
    </>
  );
};

export default Chat;
